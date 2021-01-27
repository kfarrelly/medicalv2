const { createQldbWriter, QldbSession, QldbWriter, Result, TransactionExecutor } = require('amazon-qldb-driver-nodejs');

const { Reader } = require('ion-js');

const { closeQldbSession, createQldbSession } = require('./custom_resources/QLDBHelpers/ConnectToLedger');

var util = require('./util.js');


const tableName = "UserRegister";
const indexes = ["userId"];
const adLedger = 'dev-medichain';

async function  ensureTable (driver){
  try {

    const tables = await driver.getTableNames();

    let exists = false;
    tables.forEach(table => {
      if (table == tableName) {
        exists = true;
        tableExists = true;
      }
    });

    if (!exists) {
      //await createTableandIndexes();
    }

  } catch (e) {
    console.error(e);

    //await createTableandIndexes();
  }
  finally {
    //closeQldbSession(driver);
  }
}

async function insertDocument(txn,
  tableName,
  documents
){
  console.log("insert",documents)
  const statement = `INSERT INTO ${tableName} ?`;
  const documentsWriter = createQldbWriter();
  util.writeValueAsIon(documents, documentsWriter);
  let result = await txn.executeInline(statement, [documentsWriter]);
  return result;
}


let tableExists = false;

module.exports = {
  insertDocument: async (TableName, documentData) => {
    try {
      console.log(documentData);
      let driver;
      driver = await createQldbSession();

      // if (!tableExists) {
      //   await ensureTable(driver);
      // }
      let dataArray = [];
      dataArray.push(documentData);
      console.log(dataArray);


      try {

          const txnResponse= await driver.executeLambda(async txn => {
            // txn.execute(`INSERT INTO ${tableName} ?`, userBody);
            console.log("Inserting multiple documents into the 'User' table...");
            let  documentIds = await insertDocument(txn, TableName, dataArray);
            const listOfDocumentIds = documentIds.getResultList();
              console.log("VehicleRegistration'...", listOfDocumentIds);
          },() => console.log("Retrying due to OCC conflict..."));

         return {
          success: true,
          message: "data get successfully",
          data: txnResponse
        };

      }
      catch (err) {
        console.log("err'...", err);
        return {
          success: false,
          message: err,
          data: null
        };
      }
      finally {
          closeQldbSession(driver);
      }


    } catch (err) {
      console.log("err1'...", err);
      return {
        success: false,
        message: err.toString(),
        data: null
      };
    }
  }
}

