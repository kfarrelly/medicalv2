import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpResponse, HttpClient, HttpParams } from '@angular/common/http';
import { UserLog } from '../user/mylogin/userlog';
import { register } from '../user/signup/signuplog';
import { newUser } from '../admin/dashboard/create-user/newuser';
import { Medicine } from '../admin/medicine/medicine-create/addmedicine';
import { Package } from '../admin/medicine/package-create/addpackage';
import { Medicine2 } from '../admin/medicine/medicine-create/addmedicine2';
import { Package2 } from '../admin/medicine/package-create/addpackage2';
import { Wholesaler } from '../admin/dashboard/wholesaler/wholesaler';
import { Distrubuter } from '../admin/dashboard/distrubuter/dist';
import { Pharma } from '../admin/dashboard/pharma/pharma';
import { Manufacture } from '../admin/dashboard/manufacturer/manufacture';
import { Transporter } from '../admin/dashboard/transporter/transporter';
import { Transection } from '../admin/medicine/medicine-list/transection';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient) {}
  //uri = 'http://localhost:8080';
  blockchainUrl = environment.URL;
  apiuri = environment.APIURL;
  batchUrl =environment.BATCHURL;
  usereamil;
  logout: string;
  publickey:string;
  userId:any;

  // ----Logout
  lout() {
    this.logout = localStorage.getItem("x-token");
    localStorage.removeItem("x-token");
    return this.http.post(this.apiuri + "/logOut", {
      token: this.logout
    });
  }
  //---Logouut End

  //signin to first table end
  signin: register;
  signup(signin) {
    // console.log(signin);
    return this.http.post(this.apiuri + "/signup", signin);
  }
//signin to first table end

// signin to second table
  sign: register;
  saveSignup(sign) {
    console.log('service',sign);
    // console.log(signin);
    return this.http.post(this.apiuri + "/signup2", sign);
  }
  //signin to second table end

  //login api
  userlog(ulog: UserLog): Observable<HttpResponse<UserLog>> {
    return this.http.post<UserLog>(this.apiuri + "/login", ulog, {
      observe: "response"
    });
  }
  // login api end

  //token
  setTkn(tok: string) {
    localStorage.setItem("x-token", tok);
  }
  // token end
  //get token
  getTkn() {
    return localStorage.getItem("x-token");
  }
  //get token end




  // newuser start
  createuser(createuser: newUser) {
    this.usereamil = localStorage.getItem("email");
    return this.http.post(
      this.apiuri + "/newuser",
     createuser,{params:{email:this.usereamil}}
    );
  }
  //newuser end

  // new wholesaler start
  wholesaler(createwholesaler: Wholesaler) {
    this.usereamil = localStorage.getItem("email");
    return this.http.post(
      this.apiuri + "/postWholesaler",
      createwholesaler,{params:{email:this.usereamil}}
    );
  }
  // new wholesaler end

  //Distributer Start

  distributer(createdistributer: Distrubuter) {
    this.usereamil = localStorage.getItem("email");
    return this.http.post(
      this.apiuri + "/postDistrubuter",
      createdistributer,{params:{email:this.usereamil}}
    );
  }

  //Distributer End

  //Pharma Start

  pharma(createpharma: Pharma) { 
    this.usereamil = localStorage.getItem("email");   
    return this.http.post(
      this.apiuri + "/postPharma",
      createpharma,{params:{email:this.usereamil}}
    );
  }

  //Pharma End

  //Distributor Start
  distributorqr(email) { 
    const object={
      'email':email
    }
    this.usereamil = localStorage.getItem("email");   
    return this.http.post(`${this.apiuri}/sendResetMail`,object);
    
  }
  wholesalerqr(eid,pass,actcode){
    const object={
      'email':eid,
      'password':pass,
	  'actcode':actcode
    }
       
    return this.http.post(`${this.apiuri}/resetPassword`,object);

  }

  //manufacture Start
  manufacture(createmanufacture: Manufacture) {
    this.usereamil = localStorage.getItem("email");
    return this.http.post(
      this.apiuri + "/postManufacture",
      createmanufacture,{params:{email:this.usereamil}}
    );
  }

  //manufacture End

 //transporter Start
  transporter(createtransporter: Medicine2) {
    this.usereamil = localStorage.getItem("email");
    console.log(createtransporter);
    return this.http.post(
      this.apiuri + "/postTransporter",
      createtransporter,{params:{email:this.usereamil}}
    );
  }

  //transporter End
  
  
  //transporter Start
  packagetransporter(createtransporter: Package2) {
    this.usereamil = localStorage.getItem("email");
    console.log(createtransporter);
    return this.http.post(
      this.apiuri + "/postPackageTransporter",
      createtransporter,{params:{email:this.usereamil}}
    );
  }

  //transporter End 
  
  createmedicine(createmedicine: Medicine) {
    
    this.usereamil = localStorage.getItem("email");
    return this.http.post(
      this.apiuri + "/newmedicine",
      createmedicine,{params:{email:this.usereamil}}
    );
  }
  
  createpackage(createpackage: Package) {
    
    this.usereamil = localStorage.getItem("email");
    return this.http.post(
      this.apiuri + "/newpackage",
      createpackage,{params:{email:this.usereamil}}
    );
  }
  
  
  
   createmedicine2(createmedicine2: Medicine2) {
    this.usereamil = localStorage.getItem("email");
    return this.http.post(
      this.apiuri + "/medicineStatusUpdate",
      createmedicine2,{params:{email:this.usereamil}}
    );
  }
  
  createpackage2(createpackage2: Package2) {
    this.usereamil = localStorage.getItem("email");
    return this.http.post(
      this.apiuri + "/medicineStatusUpdate",
      createpackage2,{params:{email:this.usereamil}}
    );
  }
  
   medicineTransection(transection: Transection) {
    this.usereamil = localStorage.getItem("email");
    return this.http.post(
      this.apiuri + "/transection1",
      transection,{params:{email:this.usereamil}}
    );
  }
  
  
   getMedicineTransection() {
    this.userId = localStorage.getItem("userId");
    console.log('server side userid',this.userId)
    const obj = {
			id: this.userId    
    };
    return this.http.post(this.apiuri + "/gettransection",obj);
  }

  getRecieveMedicineTransection() {
    this.userId = localStorage.getItem("userId");
	this.publickey  = localStorage.getItem("publicKey");
    console.log('server side userid',this.userId)
    const obj = {
			id: this.userId,
			key:this.publickey
    };
    return this.http.post(this.apiuri + "/getrecievetransection",obj);
  }

  /***************************get apis *********************************** */
  
  IsJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
       return false;
    }
    return true;
}

  //get user publickey
  getpublickey(key){	  
	   const obj = {
			pkey: key    
    };	   
  return this.http.post(`${this.apiuri}/keymatch`, obj);
}
  
getallUser(){
  return this.http.get(`${this.apiuri}/allUser`);
}

getallWholesalerUser(){
  return this.http.get(`${this.apiuri}/getwholesalerUser`);
}

getallTransporterUser(){
  return this.http.get(`${this.apiuri}/getTransporterUser`);
}
getallDistributerUser(){
  return this.http.get(`${this.apiuri}/getDistributerUser`);
}
getallPharmaUser(){
  return this.http.get(`${this.apiuri}/getPharmaUser`);
}
getallManufactureUser(){
  return this.http.get(`${this.apiuri}/getManufactureUser`);
}

getUser(userid){
	
	 const obj = {
			userId: userid    
    };
  return this.http.post(`${this.apiuri}/getvalidUser`,obj);
}

getvalidUser(){
  return this.http.get(`${this.apiuri}/validUser`);
}


  getMedicineList() {
    return this.http.get(this.apiuri + "/getmedicinelist");
  }
  
  
	getPackageList() {
    return this.http.get(this.apiuri + "/getpackagelist");
  }
  
  getMedicineUserId(){
    this.userId = localStorage.getItem("userId");
    console.log('server side userid',this.userId)
    const obj = {
			userId: this.userId    
    };
    return this.http.post(`${this.apiuri}/getMedicineUserId`,obj);
  }
  
  getPkgMedicineUserId(){
    this.userId = localStorage.getItem("userId");
    console.log('server side userid',this.userId)
    const obj = {
			userId: this.userId    
    };
    return this.http.post(`${this.apiuri}/getPkgMedicineUserId`,obj);
  }
  getPackageUserId(){
    this.userId = localStorage.getItem("userId");
    console.log('server side userid',this.userId)
    const obj = {
			userId: this.userId    
    };
    return this.http.post(`${this.apiuri}/getPackageUserId`,obj);
  }
  
  getNotification() {
    return this.http.get(this.apiuri + "/getnotification");
  }
  
  getNotificationUserId()
  {
    this.userId = localStorage.getItem("userId");
	this.publickey = localStorage.getItem("publicKey");
    console.log('server side userid',this.userId)
    const obj = {
			userId: this.userId ,
			publickey: this.publickey
    };
    return this.http.post(`${this.apiuri}/getNotificationUserId`,obj);
  }
  
  
  openpackage(id,publickey){
    this.userId = localStorage.getItem("userId");
    console.log('server side userid',this.userId)
    const obj = {
			userId: this.userId,
			PackageId:id,
			publickey:publickey
    };
    return this.http.post(`${this.apiuri}/openPackage`,obj);
  }
  
  getMedicineStatus(id){
	  return this.http.get(`${this.apiuri}/getMedicineStatus/${id}`);
  }  
  
  getPackageStatus(id){
	  return this.http.get(`${this.apiuri}/getPackageStatus/${id}`);
  }  
  
 getMedicineStatus2(id){
	  return this.http.get(`${this.apiuri}/getMedicineStatus2/${id}`);
  }
  
  getMedicineStatus3(id){
	  return this.http.get(`${this.apiuri}/getMedicineStatus3/${id}`);
  }
  
  getPackageStatus3(id){
	  return this.http.get(`${this.apiuri}/getPackageStatus3/${id}`);
  }
  
  getPackageStatus2(id){
	  return this.http.get(`${this.apiuri}/getPackageStatus2/${id}`);
  }

  getMedicineId(id){   
	  return this.http.get(`${this.apiuri}/getByMedicineId/${id}`);
  }
  
  getPackageId(id){   
	  return this.http.get(`${this.apiuri}/getByPackageId/${id}`);
  }

  transporterMedicine(id){   
	  return this.http.get(`${this.apiuri}/getTransporter/${id}`);
  }
  
  transporterPackage(id){   
	  return this.http.get(`${this.apiuri}/getPackageTransporter/${id}`);
  }


  ////Distributor
  getDistributerList() {
    return this.http.get(this.apiuri + "/getdistributerlist");
  }
  //Distrubtor End

  //Manufacture start
  getManufactureList() {
    return this.http.get(this.apiuri + "/getmanufacturelist");
  }

  //ManuFacture End

  //WholeSaler Start
  getWholesalerList() {
    return this.http.get(this.apiuri + "/getwholesalerlist");
  }
  //WholeSaler End

  //Pharma Start
  getPharmaList() {
    return this.http.get(this.apiuri + "/getpharmalist");
  }
  //Pharma End
  
     //transporter Start
  getTransporterList() {
    return this.http.get(this.apiuri + "/gettransporterlist");
  }
  //transporter End
  
  //transporter Start
  getPackagetransporterList() {
    return this.http.get(this.apiuri + "/getpackagetransporterlist");
  }
  //transporter End

  getprofile(x: string) {
    let params: HttpParams = new HttpParams().set("token", x);
    return this.http.get(this.apiuri + "/profile", { params });
  }

  /*******************************DELETE API*********************************/

  deleteUser(id){
    return this.http.get(`${this.apiuri}/deleteUser/${id}`);
  }
  
    deletevalidUser(id){
    return this.http.get(`${this.apiuri}/deletevalidUser/${id}`);
  }
  // delete medicine start

  deleteMedicine(id) {
    return this.http.get(`${this.apiuri}/deleteMedicine/${id}`);
  }
  
  // delete medicine start

  deleteNotification(id) {
    return this.http.get(`${this.apiuri}/deleteNotification/${id}`);
  }
  // delete package start

  deletePackage(id) {
    return this.http.get(`${this.apiuri}/deletePackage/${id}`);
  }
  
  
  deletePackageTransport(id,publickey) {
    const object={
      'id':id,
      'publickey':publickey
    }
       
    return this.http.post(`${this.apiuri}/deletePackageTransport`,object);
  }
  // delete medicie

  // delete Manufacture start

  deleteManufacture(id) {
    return this.http.get(`${this.apiuri}/deleteManufacture/${id}`);
  }
  // delete Manufacture ends

  //Delete WholeSaler
  deletewholesaler(id) {
    return this.http.get(`${this.apiuri}/deleteWholesaler/${id}`);
  }
  //Delete WholeSaler

  //Delete Pharma Start
  deletePharma(id) {
    return this.http.get(`${this.apiuri}/deletePharma/${id}`);
  }
  //Delete Pharma End
  //Delete Pharma Start
  deleteDistributer(id) {
    return this.http.get(`${this.apiuri}/deleteDistrubuter/${id}`);
  }
  //Delete Pharma End

  /*******************************************edit item ************************************** */
   editMedicineStatus(id) {
     //console.log("Edit Medicine");
    return this.http.get(`${this.apiuri}/editMedicineStatus/${id}`);
  }
  
   editPackageStatus(id) {
     //console.log("Edit Medicine");
    return this.http.get(`${this.apiuri}/editPackageStatus/${id}`);
  }
  
  editPharma(id) {
    return this.http.get(`${this.apiuri}/edit/${id}`);
  }

  editDistributor(id) {
    return this.http.get(`${this.apiuri}/editDistributor/${id}`);
  }

  editWholesaler(id) {
    return this.http.get(`${this.apiuri}/editWholesaler/${id}`);
  }
  editManufacture(id) {
    return this.http.get(`${this.apiuri}/editManufacture/${id}`);
  }
  /************************************update fileds***********************************************/
//-----------------------update user
updateProfile(firstName,lastName,mobileNo,email,mylocation,id) { 

  const obj = {
    firstName:firstName,
    lastName:lastName,
    mobileNo:mobileNo,
    email:email,
    location:mylocation
   
  };
  return this.http.post(`${this.apiuri}/updateprofile/${id}`, obj);
	//.subscribe(res => console.log("Done"))
}

//-----------------------update user
updatePassword(eid,newPassword,id) { 
    const object={
      'email':eid,
      'password':newPassword,
	  'actcode':''
    }
       
    return this.http.post(`${this.apiuri}/resetPassword`,object);

	//.subscribe(res => console.log("Done"))
}
//----------------------update pharma
  updatePharma(batchid,  medicineStatus,medicineQuality,id) {   
    const obj = {
      batchid: batchid,
      medicineStatus: medicineStatus,
      medicineQuality: medicineQuality
      
    };
    this.http
      .post(`${this.apiuri}/updatepharma/${id}`, obj)
      .subscribe(res => console.log("Done"));
  }

  //----------------------Update Wholesaler
  updateWholesaler(batchid,shipper,reciver, id) {    
    const obj = {
      batchid: batchid,
      shipper: shipper,
      reciver: reciver
      
    };
    this.http
      .post(`${this.apiuri}/updateWholesaler/${id}`, obj)
      .subscribe(res => console.log("Done"));
  }

  updatManufacture(medicinedescription,medicineStatus,pickdate,packdate,reciver,quality, recivertype,id) {
    
    const obj = {
      medicinedescription: medicinedescription,
      medicineStatus: medicineStatus,
      pickdate: pickdate,
      packdate: packdate,
      reciver: reciver,
      quality: quality,
      recivertype: recivertype
    };
    this.http
      .post(`${this.apiuri}/updateManufacture/${id}`, obj)
      .subscribe(res => console.log("Done"));
  }

  //Update Distributor
  updateDistributor(batchid,shipper, reciver, id) {
    
    const obj = {
      batchid: batchid,
        shipper: shipper,
      reciver: reciver    
    };
    this.http
      .post(`${this.apiuri}/updateDistributor/${id}`, obj)
      .subscribe(res => console.log("Done"));
  }
}