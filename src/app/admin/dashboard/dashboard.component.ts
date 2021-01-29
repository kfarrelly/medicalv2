import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, DoCheck, OnDestroy {
	flayg;
	la;
	lb: Subscription;

	takenToken;
	myrole;
	mypublickey;
	newpublickey;
	mypublickey1;
	primerykeyinput: any = [];
	count: number = 0;
	rolevalue: boolean;
	Mrolevalue: boolean;
	Wrolevalue: boolean;
	Wrolevalue1: boolean;
	Drolevalue: boolean;
	Prolevalue: boolean;
	Trolevalue: boolean;
	list: any = [];
	user: any = [];
	isShown: boolean = false;
	popuptask: boolean = false;
	button1: any;
	privateKeyForm: FormGroup
	submitted = false;
	constructor(private router: Router, private httpuser: AuthService, private formBuilder: FormBuilder) { }

	navigate(value) {
		if (value) {
			this.router.navigate([value]);
		}
		return false;
	}
	ngOnInit() {
		this.privateKeyForm = this.formBuilder.group({
			key: ['', [Validators.required]],

		})
		this.button1 = 'show';
		//this.onloadcheckKey();
		this.myrole = localStorage.getItem("role");
		this.Manufacturerole();

		this.Wholesalerrole();
		this.Wholesalerrole1();
		this.Distributorrole();
		this.Pharmarole();
		this.Transporterrole();


		if (this.myrole == "1") {
			this.rolevalue = true;
		}
		else {
			this.rolevalue = false;
		}

		this.takenToken = this.httpuser.getTkn();
		if (!this.takenToken) {
			this.router.navigate(['/home']);
		}

		this.notification();

	}



	notification() {
		this.myrole = localStorage.getItem("role");

		if (this.myrole == 1) {

			this.httpuser.getvalidUser().subscribe((data) => {
				this.user = data;
			});
			return this.httpuser.getNotification().subscribe((data) => {
				this.list = data;
				console.log("All Notification", this.list);
			});



		} else {
			return this.httpuser.getNotificationUserId().subscribe((data) => {
				console.log(data);
				this.list = data;
				console.log("user Notification", this.list);
			});

		}

	}

	//propup for private key........
	onloadcheckKey() {
		this.mypublickey1 = localStorage.getItem("generatedPublickey");
		this.mypublickey = localStorage.getItem("publicKey");
		if (this.mypublickey1 == this.mypublickey) {
			this.button1 = "hide";
			this.popuptask = false;
		}
		else {
			return;
		}
	}

	postPrivateKey(keystring) {
	
	}

	//button enable by their role assign start..........

	Manufacturerole() {
		if (this.myrole == "2") {
			this.Mrolevalue = true;
		}
		else {
			this.Mrolevalue = false;
		}
	}

	Wholesalerrole() {
		if (this.myrole == "3") {
			this.Wrolevalue1 = true;
		}
		else {
			this.Wrolevalue1 = false;
		}
	}

	Wholesalerrole1() {
		if (this.myrole == "3") {
			this.Wrolevalue = true;
		}
		else {
			this.Wrolevalue = false;
		}
	}



	Distributorrole() {
		if (this.myrole == "4") {
			this.Drolevalue = true;
		}
		else {
			this.Drolevalue = false;
		}
	}
	Pharmarole() {
		if (this.myrole == "5") {
			this.Prolevalue = true;
		}
		else {
			this.Prolevalue = false;
		}
	}
	Transporterrole() {
		if (this.myrole == "7") {
			this.Trolevalue = true;
		}
		else {
			this.Trolevalue = false;
		}
	}

	// button role ends.........

	ngDoCheck() {
		this.flayg = this.httpuser.getTkn();
	}
	get f() { return this.privateKeyForm.controls; }

	onSubmit() {
		console.log('log me');
		
		this.submitted = true;
		if (this.privateKeyForm.invalid) {
			return;
		  }
		  this.count++;
		  console.log('count number', this.count);
		  if (this.count == 3) {
			  this.logout();
		  }
		  else {
			const keystring =this.f.key.value
			console.log('keystring: ', keystring);
			  return this.httpuser.getpublickey(keystring).subscribe(result => {
				  this.primerykeyinput = result;
				  this.mypublickey = localStorage.getItem("publicKey");
				  //alert(this.mypublickey+"======"+this.primerykeyinput);
				  if (this.primerykeyinput == this.mypublickey) {
					  this.newpublickey = localStorage.setItem('privateKey', this.primerykeyinput);
					  this.newpublickey = localStorage.setItem('generatedPublickey', this.primerykeyinput);
					  this.button1 = "hide";
					  this.popuptask = false;
				  }
				  else {
					  console.log('count number', this.count);
					  this.button1 = 'show';
				  }
  
			  });
		  }
  
	}
	logout() {
		localStorage.removeItem("id_token");
		localStorage.removeItem("publicKey");
		localStorage.removeItem("generatedPublickey");
		localStorage.removeItem("privateKey");
		localStorage.removeItem("role");
		localStorage.removeItem("email");
		localStorage.removeItem("user");
		localStorage.removeItem("pass");


		this.la = this.httpuser.lout();
		this.lb = this.la.subscribe((data) => {
			console.log("logout");
		},
			(err) => {
				console.log(err);
				this.router.navigate(['/home']);
			},
			() => {
				this.router.navigate(['/home']);
			});
	}

	ngOnDestroy() {

		if (this.lb !== undefined) {
			this.lb.unsubscribe();
		}
	}


}
