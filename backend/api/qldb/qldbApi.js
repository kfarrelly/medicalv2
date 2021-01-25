const { createQldbWriter, QldbSession, QldbWriter, Result, TransactionExecutor } = require('amazon-qldb-driver-nodejs');

const { Reader } = require('ion-js');

const { closeQldbSession, createQldbSession } = require('../custom_resources/QLDBHelpers/ConnectToLedger');

var util = require('./util.js');
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
      await createTableandIndexes();
    }

  } catch (e) {
    console.error(e);

    await createTableandIndexes();
  }
  finally {
    closeQldbSession(driver);
  }
}

async function insertDocument(txn,
  tableName,
  documents
){
  const statement = `INSERT INTO ${tableName} ?`;
  const documentsWriter = createQldbWriter();
  util.writeValueAsIon(documents, documentsWriter);
  let result = await txn.executeInline(statement, [documentsWriter]);
  return result;
}


export default {
  registerUser: async (userData) => {
    try {
      console.log(userData);
      let driver;
      driver = await createQldbSession();

      if (!tableExists) {
        await ensureTable(driver);
      }

      let userBody = JSON.parse(req.body);

      try {

          const txnResponse= await driver.executeLambda(async txn => {
            txn.execute(`INSERT INTO ${tableName} ?`, userBody);
          });

         return {
          success: true,
          message: "data get successfully",
          data: txnResponse
        };

      } finally {
          closeQldbSession(session);
      }


    } catch (err) {
      return {
        success: false,
        message: err.toString(),
        data: null
      };
    }
  }
}

