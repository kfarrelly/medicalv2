import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { QrCodeReader } from 'src/app/qr-code-reader.service';
import { Subscription } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Package2 } from 'src/app/admin/medicine/package-create/addpackage2';
import { Transection } from 'src/app/admin/medicine/medicine-list/transection';
import { Angular5Csv } from 'angular5-csv/dist/Angular5-csv';
import { Medicine2 } from 'src/app/admin/medicine/medicine-create/addmedicine2';
@Component({
  selector: 'app-recievepackagepharmareport',
  templateUrl: './recievepackagepharmareport.component.html',
  styleUrls: ['./recievepackagepharmareport.component.css']
})
export class RecievepackagepharmareportComponent implements OnInit {
 
  selectedWId: string = '';
  selectedTId: string = '';
  serialvalue:any=" ";
  levelvalue:any=" ";
  barcodevalue:any;
  subscription: Subscription;
transporter1: any = Package2;
list: any = [];
mlist:any=[];
medlist:any=[];
plist:any=[];
dlist:any=[];
tlist:any=[];
TMlist:any=[];
meds: any = [];
transection:any=Transection;
base;
call;
displayTable:boolean=false;
blockchain:any=[];
blockchain2:any=[];
status:any=[];
statusValue:any;
itemId:any=[];
packageStatus;
medicineStatus;

  mypublickey:any;
  myrole:any;
  privateKey:any;
  blockchainUrl:any = this.httpuser.blockchainUrl;

  constructor(private httpuser: AuthService,private qrReader: QrCodeReader,private http: HttpClient) { }

  ngOnInit() {
	this.medicineStatus="Recived to Pharma";
    this.packageStatus="Recived to Pharma";
	this.myrole = localStorage.getItem("role");
    this.mypublickey =localStorage.getItem("publicKey");
    this.privateKey =localStorage.getItem("privateKey");
    this.transporterPackageId(this.mypublickey);
    this.allPharma();
    this.allTransporter();
  }
 
  selectChangeHandler1 (event: any) {
    //update the ui
    this.selectedWId = event.target.value;
  }

  selectChangeHandler2 (event: any) {
    //update the ui
    this.selectedTId = event.target.value;
  }

  serialId(serialId,level){
	  this.serialvalue=serialId;  
	  this.levelvalue = level;
  }
  

  onFileChange(event) {
    const file = event.target.files[0];
    this.subscription = this.qrReader.decode(file)
      .subscribe(decodedString =>{
    this.barcodevalue= decodedString;
    console.log(decodedString)
    });
  }


  transporterPackageId(id) {
    return this.httpuser.transporterPackage(id).subscribe(data => {
      this.TMlist = data; 
console.log(this.TMlist);	  
    });
  }

  getByPackageId(id,statusid) {  
    let that = this;
    this.mypublickey =localStorage.getItem("publicKey");
    this.privateKey =localStorage.getItem("privateKey");  
    this.httpuser.getPackageId(id).subscribe(data => {
   this.mlist=data;
   this.displayTable=true; 
    if(statusid == 5) this.packageStatus = "Rejected from Distributer";
		this.transporter(this.mlist[0].serial,this.mlist[0].medicines, this.mlist[0].barcode, this.mlist[0].location, this.mlist[0].level, this.mlist[0].packages, this.mlist[0].PackageId, this.mlist[0].role, this.mlist[0].time, this.mypublickey,this.packageStatus);
		if(statusid == 5)
			alert("Package Returned ");
		else
			alert("Package piked ");
   //Register User on Blockchain ==>> if "COMMITED" :: register in db else Mail (ERROR Message)	
			  
//  const Metadata = {
//   "action": "recieveFromDistributer",
//   "payloaddata": {
//       "serialNumber": this.mlist[0].serial,
//       "status": statusid,
//       "comment": "Delivered",
// 	  "level":this.levelvalue
//   },
//   "private":this.privateKey,
//   "public": this.mypublickey
//     }	    

// const httpOptions = {
// headers: new HttpHeaders({
//   'Content-Type': 'application/json'
// })
// }

//     return this.http.post(this.blockchainUrl, Metadata,httpOptions).subscribe(
//  (val) => {	
//   console.log("POST call successful value returned in body", val);
//   this.blockchain = val;
//   if (that.httpuser.IsJsonString(this.blockchain.response.body)) {
//     JSON.parse(this.blockchain.response.body).hasOwnProperty("data");

//     this.status = JSON.parse(this.blockchain.response.body);            
//     this.statusValue = this.status.data[0].status;
//     this.itemId = this.status.data[0].id;
//     if (this.statusValue == 'COMMITTED') {   
//    this.displayTable=true; 
//     if(statusid == 5) this.packageStatus = "Rejected from Distributer";
// 		this.transporter(this.mlist[0].serial,this.mlist[0].medicines, this.mlist[0].barcode, this.mlist[0].location, this.mlist[0].level, this.mlist[0].packages, this.mlist[0].PackageId, this.mlist[0].role, this.mlist[0].time, this.mypublickey,this.packageStatus);
// 		if(statusid == 5)
// 			alert("Package Returned ");
// 		else
// 			alert("Package piked ");
//   }
//   else{
// 	  alert("Process not completed");
//   }
//   }
//   else {

//     that.http.get(this.httpuser.batchUrl +"/batch_statuses?" + this.blockchain.id + "&wait").subscribe((val) => {
//       this.blockchain2 =val
//       if (that.httpuser.IsJsonString(this.blockchain2.body)) {
//         this.status = JSON.parse(this.blockchain2.body);
//         console.log('json value2', this.status.data[0].status);
//         this.statusValue = this.status.data[0].status;
//         this.itemId = this.status.data[0].id;
//         if (this.statusValue == 'COMMITTED') {
// 				if(statusid == 5) this.packageStatus = "Rejected to Distributer";
//                   this.transporter(this.mlist[0].serial,this.mlist[0].medicines, this.mlist[0].barcode, this.mlist[0].location, this.mlist[0].level, this.mlist[0].packages, this.mlist[0].PackageId, this.mlist[0].role, this.mlist[0].time, this.mypublickey,this.packageStatus);
//                   if(statusid == 5)
// 					alert("Package Returned ");
// 				else
// 					alert("Package picked");
//         }
//         else {
//           alert('Request Rejected');
//         }
//       }
//     })
//   }
// // }).catch(function (err) {
// //   console.log(err.message);
// });
});
}

allPharma() {
  return this.httpuser.getallPharmaUser().subscribe(data => {
    this.dlist = data; 
console.log(this.dlist);	  
  });
}

allTransporter() {
  return this.httpuser.getallTransporterUser().subscribe(data => {
    this.tlist = data; 
console.log(this.tlist);	  
  });
}


transporter(a, b, c, d, e, f, g, h, i, j, k) {
    this.transporter1 = new Package2(a, b, c, d, e, f, g, h, i, j, k);
    this.base = this.httpuser.packagetransporter(this.transporter1);
    this.call = this.base.subscribe(
      data => {
        alert("done");

      },
      err => {
        console.log(err);
      },
      () => {
        console.log("Done");
      }
    );
  }

 
openpackage(id,level) {  
    this.levelvalue=level;
    let that = this;
    this.mypublickey =localStorage.getItem("publicKey");
    this.privateKey =localStorage.getItem("privateKey");  
    this.httpuser.getPackageId(id).subscribe(data => {
   this.mlist=data;

   //Register User on Blockchain ==>> if "COMMITED" :: register in db else Mail (ERROR Message)	
			  
//  const Metadata = {
//   "action": "openPackage",
//   "payloaddata": {
//       "serialNumber": this.mlist[0].serial,
//       "userRole": this.myrole,
//       "admin": false,
// 	  "level":this.levelvalue
//   },
//   "private":this.privateKey,
//   "public": this.mypublickey
//     }	    

// const httpOptions = {
// headers: new HttpHeaders({
//   'Content-Type': 'application/json'
// })
// }

//     return this.http.post(this.blockchainUrl, Metadata,httpOptions).subscribe(
//  (val) => {	

//   console.log("POST call successful value returned in body", val);
//   this.blockchain = val;
//   if (that.httpuser.IsJsonString(this.blockchain.response.body)) {
//     JSON.parse(this.blockchain.response.body).hasOwnProperty("data");

//     this.status = JSON.parse(this.blockchain.response.body);            
//     this.statusValue = this.status.data[0].status;
//     this.itemId = this.status.data[0].id;
//     if (this.statusValue == 'COMMITTED') {   
// 	   this.displayTable=true; 
// 	  //this.openpackagecall(id,this.mypublickey);
// 		/*Transfer child packages to user account*/
// 			if(Array.isArray(this.mlist[0].packages))
// 				var meds = this.mlist[0].packages;
// 			else
// 				var meds = this.mlist[0].packages.split(',');
			
// 			if(meds.length>0)
// 			{
// 				for(var j=0;j < meds.length; j++)
// 				{
// 					this.httpuser.getPackageStatus3(meds[j]).subscribe((pdata) =>{
						
// 						  this.httpuser.getPackageId(id).subscribe(packagedata => {
// 								this.plist=packagedata;
								
// 								this.transporter(this.plist[0].serial,this.plist[0].medicines, this.plist[0].barcode, this.plist[0].location, this.plist[0].level, this.plist[0].packages, this.plist[0].PackageId, this.plist[0].role, this.plist[0].time, this.mypublickey,this.packageStatus);
								
								
// 						});		

// 						//this.getByPackageId(pdata.PackageId,'4');
						
// 					});
// 				}
// 			}
			
// 			/*Transfer child medicines to user account*/
			
// 			if(Array.isArray(this.mlist[0].medicines))
// 				var meds = this.mlist[0].medicines;
// 			else
// 				var meds = this.mlist[0].medicines.split(',');
			
// 			if(meds.length>0)
// 			{
// 				for(var j=0;j < meds.length; j++)
// 				{
// 					this.httpuser.getMedicineStatus3(meds[j]).subscribe((mdata) =>{
						
// 							this.httpuser.getMedicineId(id).subscribe(medicinedata => {
// 								this.medlist=medicinedata;
								
// 								 this.medicineTransporter(this.medlist[0].serial,this.medlist[0].medicine,this.medlist[0].barcode,this.medlist[0].location,this.medlist[0].weight,this.medlist[0].Edate,this.medlist[0].Mdate,this.medlist[0].MedicineId,this.medlist[0].role,this.medlist[0].time,this.mypublickey,this.medicineStatus);
								
								
// 						});
					
// 							//this.medicinedetails.push(mdata);
						
// 					});
// 				}
// 			}
// 			this.httpuser.deletePackageTransport(id,this.mypublickey).subscribe(res => {

// 				alert("Package Opened ");

// 			 });
// 			//alert("Package Opened ");
//   }
//   else{
// 	  alert("Process not completed");
//   }
//   }
//   else {

//     that.http.get(this.httpuser.batchUrl +"/batch_statuses?" + this.blockchain.id + "&wait").subscribe((val) => {
//       this.blockchain2 =val
//       if (that.httpuser.IsJsonString(this.blockchain2.body)) {
//         this.status = JSON.parse(this.blockchain2.body);
//         console.log('json value2', this.status.data[0].status);
//         this.statusValue = this.status.data[0].status;
//         this.itemId = this.status.data[0].id;
//         if (this.statusValue == 'COMMITTED') {
// 				/*Transfer child packages to user account*/
// 			if(Array.isArray(this.mlist[0].packages))
// 				var meds = this.mlist[0].packages;
// 			else
// 				var meds = this.mlist[0].packages.split(',');
			
// 			if(meds.length>0)
// 			{
// 				for(var j=0;j < meds.length; j++)
// 				{
// 					this.httpuser.getPackageStatus3(meds[j]).subscribe((pdata) =>{
						
// 						  this.httpuser.getPackageId(id).subscribe(packagedata => {
// 								this.plist=packagedata;
								
// 								this.transporter(this.plist[0].serial,this.plist[0].medicines, this.plist[0].barcode, this.plist[0].location, this.plist[0].level, this.plist[0].packages, this.plist[0].PackageId, this.plist[0].role, this.plist[0].time, this.mypublickey,this.packageStatus);
								
								
// 						});		

// 						//this.getByPackageId(pdata.PackageId,'4');
						
// 					});
// 				}
// 			}
			
// 			/*Transfer child medicines to user account*/
			
// 			if(Array.isArray(this.mlist[0].medicines))
// 				var meds = this.mlist[0].medicines;
// 			else
// 				var meds = this.mlist[0].medicines.split(',');
			
// 			if(meds.length>0)
// 			{
// 				for(var j=0;j < meds.length; j++)
// 				{
// 					this.httpuser.getMedicineStatus3(meds[j]).subscribe((mdata) =>{
						
// 							this.httpuser.getMedicineId(id).subscribe(medicinedata => {
// 								this.medlist=medicinedata;
								
// 								 this.medicineTransporter(this.medlist[0].serial,this.medlist[0].medicine,this.medlist[0].barcode,this.medlist[0].location,this.medlist[0].weight,this.medlist[0].Edate,this.medlist[0].Mdate,this.medlist[0].MedicineId,this.medlist[0].role,this.medlist[0].time,this.mypublickey,this.medicineStatus);
								
								
// 						});
					
// 							//this.medicinedetails.push(mdata);
						
// 					});
// 				}
// 			}
		
// 				this.httpuser.deletePackageTransport(id,this.mypublickey).subscribe(res => {

// 				alert("Package Opened ");

// 			 });
//         }
//         else {
//           alert('Request Rejected');
//         }
//       }
//     })
//   }
// // }).catch(function (err) {
// //   console.log(err.message);
// });
});
}


   exporttocsv()
  {
	  var data = [];
	  var  datarow = {};
	
	if(Array.isArray(this.TMlist))
			this.meds = this.TMlist;
		else
			this.meds = this.TMlist.split(',');
		
	  for(var i=0;i<=this.meds.length;i++)
	  {
		  console.log("meds==" + this.meds[i]);
		  if(typeof this.meds[i] != "undefined")
		  {
			datarow = {
			serial:this.meds[i].serial,
			location: this.meds[i].location,
			level: this.meds[i].level,
			time: this.meds[i].time,
			};
			data.push(datarow);
		  }
	  }

		var options = {
		fieldSeparator: ',',
		quoteStrings: '"',
		decimalseparator: '.',
		showLabels: true,
		showTitle: true,
		headers: ["Serial Number","Location","Level", "Date/Time"]
		};

		new Angular5Csv(data, 'Report1',options);

		return true;
  }



  

medicineTransporter(a,b,c,d,e,f,g,h,i,j,k,l){  	  
  this.transporter1 = new Medicine2(a,b,c,d,e,f,g,h,i,j,k,l);
   this.base = this.httpuser.transporter(this.transporter1);
  this.call = this.base.subscribe(
    data => {       
      alert("done");
      
    },
    err => {
      console.log(err);
    },
    () => {
      console.log("Done");
    }
  );
}



mTransection(serial:string,wholesalerId:string,transpoterId:string) {   
  console.log(serial,wholesalerId,transpoterId);
  //Register User on Blockchain ==>> if "COMMITED" :: register in db else Mail (ERROR Message)	
			  
//  const Metadata = {
// 			  "action": "sendToPharma",
//     "payloaddata": {
//         "serialNumber": serial,
//         "wholesaler": {
//             "address": wholesalerId,
//             "comment": "In Transaction"
//         },
//         "transporterid": transpoterId,
// 		"level":this.levelvalue
//     },
// 				"private":this.privateKey,
// 				"public": this.mypublickey
// 					}	    
	
// 	const httpOptions = {
//       headers: new HttpHeaders({
//         'Content-Type': 'application/json'
//       })
//     };
	
//             var x = this.http.post(this.blockchainUrl, Metadata,httpOptions).subscribe(
//        (val) => {	
// 	   this.blockchain=val;
//         console.log("POST call successful value returned in body",val);
// 	   if(this.blockchain){
//     this.transection = new Transection(serial,wholesalerId,transpoterId);
//     this.base = this.httpuser.medicineTransection(this.transection);
//     this.call = this.base.subscribe(
//       data => {        
//         alert("done");        
//       },
//       err => {
//         console.log(err);
//       },
//       () => {
//         console.log("Done");
//       }
//     );
//   }
//   else{
// 	  alert("Process not completed");
//   }
//   });
  }

}
