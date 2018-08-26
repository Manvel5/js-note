1) Angular Template Driven Form
	<form #userForm="ngForm" (ngSubmited)="submit(userForm.value)">
		<input #nameRef="ngModel" type="text" name="firstname" ngModel required>
		<div [hidden]="nameRef.valid">
			firstname is required
		</div>
		<input type="text" name="lastname" ngModel>
		<input type="text" name="email" ngModel>
		<div ngModelGroup="address">
			<input type="text" name="street" ngModel>
			<input type="text" name="postcode" ngModel>
		</div>
		<button type="submit">Send</button>
	</form>
	
	//nameRef is formControl
	
	submit(model) {
		console.log(model);
		{firstname: '', lastname: '', emai: '', address:{street:'', postcode: ''}}
	}

Angular Template Driven Form Validation	
	ng-touched		ng-untouched
	ng-dirty		ng-pristine
	ng-valid		ng-invalid

	

2) Model Driven Forms
userForm = new FormGroup({
	name: new FormControl('max', [Validators.required, Validators.minlength(14)]),
	email: new FormControl(),
	address: {
		street: new FormControl()
	}
})	
//FormControl first param is defaul value of input secound parameter is validator
	
	<form [formGroup]="userForm">
		<inputtype="text" name="name" formControlName="name">
		<input type="text" name="email" formControlName="name">
		<div formGroupName="address">
			<input type="text" name="street" formControlName="name">
		</div>
		<button type="submit">Send</button>
	</form>
	
3)  Model Driven Forms with FormBuilder	

constructor(private formBuilder: FormBuilder){
	this.userForm = this.formBuilder.group({
		name: ['max', [Validators.required, Validators.minlength(14)]],
		email: [],
		address: this.formBuilder.group({
			street: []
		})
	});
}

// @Input() @Output()

export class App {
	appMethod(msg) {
		console.log(msg); //message from AppTestComponent
	}
}

// app.component.html
<div>
	<app-test [parentComponentData]="data" (apptestEvent)="appMethod()"></app-test>
</div>
//app.test.ts
export class AppTest {
	@Input() public parentComponentData; //OR @Input('parentComponentData') data
	@Output() public apptestEvent = new EventEmitter();

	init() {
		this.apptestEvent.emmit("message from AppTestComponent")
	}	
}
// childroutes used for example create form steps
{
	path: 'departament',
	component: departamentComponent,
	children {
		{path: 'content', component: departamentContentComponent},
		{path: 'view', component: departamentViewComponent}
	}
}
//departament.component.html

<router-outlet></router-outlet>
<botton routerLink="content">content</botton>
<botton routerLink="view">view</botton>
	
	
	
	
	
	
	
	
