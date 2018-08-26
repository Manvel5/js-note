ng new my-project --style scss --prefix rtm <!-- config for angulae-cli.json-->
FormsModule dependency in app.module.ts for work [(ngModel)] 
<input (keyup.enter)="enter()"> focus input after enter call enter()
<div  [ngStyle]="{backgroundColor: 'red', color: '#fff'}"></div> 
<div  [ngClass]="{'className': boolean, 'newclass': condition}"></div> 

Pipe === filter
let propertyDate = new Date()
propertyDate.toDateString();
<div>{{propertyDate | date: 'short' | uppercase}}</div><!-- retun 4/12/2015   -->

				@Input @Output
interface CarType{
	name: string
}
@Component(
	'template': `
		<app-car [carItem]='car' (outputExample)='emiter($event)'></app-car>
	`
)
export class AppComponent{
	car = {...}
	emiter(car: CarType) {
		this.car.push(car);
	}
}

@Component(
	'selector': 'app-car'
	'template': `<a (click)='myAction()'>car.name</a>`
)
export class AppCarComponent {
	@Input('carItem') car; OR @Input() carItem;
	@Output('outputExample') data = new EventEmiter<CarType>()
	<!-- OR @Output() outputExample -->
	myAction() {
		this.data.emmit({name: 'new car'})
	}
}

when *.component.spec.ts not needed. ng g c --spec=false ,ng g c --css=false
app.component.css work only app.component.html template

@Component(
	'template': `
		<input #carName>
		<button (click)='call(carName)'></button>
	`
)
export class AppComponent {
	@ViewChild() carName: ElementRef;
	<!-- @ViewChild('carName') property: ElementRef -->
	call(carName: HTMLInputElement) {
		carName === this.carName.nativeElement; //true
	}
}

<!-- app.component.html -->
// <div>
// 	<app-car>ng content text info {{carName}} <h1 #hInfo>Info</h1> </app-car>
// </div>
//   car.component.html
// <div>
// 	<ng-content></ng-content>return ng content text info cFord
// </div>
// car.component.ts
export class CarComponent implements 
	OnInit, OnChabges, DoCheck , AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{
	@ContentChilde('hInfo') info: ElementRef;
	<!-- @ViewChild hInfo is undefined .use ContentChilde when element  -->
	ngOnInit() {
		console.log('its call after component created');
	}
	ngOnChanges(data: SimpleChanges) {
		<!-- its call when component properties changes -->
	}
	ngDoCheck() {
		console.log('ngDoCheck call after ngOnChanges()')
	}
	ngAfterContentInit() {
		console.log('its call after properties init');
	}
	ngAfterContentChecked() {
		console.log('its call after ngAfterContentInit()');
	}
	ngAfterViewInit() {
		console.log('its call when view is init');
	}
	ngAfterViewChecked() {
		console.log('its call after ngAfterViewInit()');
	}
	ngOnDestroy() {
		console.log('its call after component deleted');
	}
}

			Directive

// <h1 myDir [x]="'prop'">lorem ipsum</h1>
ng g d my-directive --spec=false

@Directive(
	'selector': '[myDir]'
)
export class MyDirective implements OnInit{
	@Input('x') x: string;
	constructor(private element: ElementRef){}

	ngOnint(){
		this.element.nativeElement.text = "new Name";
	}

	@HostListener('mouseenter'. ['$event']) mouseEnter(event: Event){;
		console.log('its call in hover event',event)
	}
}			
// <div [ngSwitch]="item">
// 	<p *ngSwitchCase='1'>1</p>
// 	<p *ngSwitchCase='2'>2</p>
// 	<p *ngSwitchCase='3'>3</p>
// 	<p *ngSwitchDefault>88</p>
// </div>

				Pipie OR Filter

ng g p my-pipe
@Pipe({
	name: 'myPipe'
})
export class MyPipe implements PipeTransform{
	transform(value, param1, param2) { 
		<!-- param1 = 3  param2 = 8-->
		return value + param1 + param2;
	}
}				
// <h1>{{number | myPipe: 3 : 8}}</h1>

Service 

when service provide in MyComponent it was Singleton in childe components.

B service provide in MyComponent.
 When A service inject in B service A service should be provide  Mycomponent or parent component

 when we want inject A service to B service we use @Injectable().
 in component we can inject without @Injectable();


 				Form validation

For form validation have 2 case 
1. Template validation
2. reactiv validation


				Case 1

@Component(
	selector: 'my-component',
	template: `
		<form #form="ngForm" (ngSubmit)="log()">
			<input type="text" name="username" ngModel>
			<input type="password" name="password" ngModel>
			<div ngModelGroup="user" #modelGroup="ngModelGroup">
				<input type="text" name="user" ngModel>
				<input type="password" name="pass" ngModel>
			</div>
			<p *ngIf="myform.invalid">error</p>
			<p *ngIf="myUser.invalid">error</p>
		</form>
	`
)	
export class MyComponent {
	@ViewChild('form') myform: NgForm;
	@ViewChild('modelGroup') myUser: NgModelGroup;
	log(){
		<!-- form object have all inout value if input have ngModel attr -->
		console.log(this.form.value);
		<!-- 
		{
			username: ''
			password:''
			user {
				user: ''
				pass: ''
			}
		}
		 -->
	}
	change() {
		this.myform.form.patch({
			username: 'asas'
		});
	}
}



		Case 2 Reactive Forms

@Component(
	selector:'my-app'
	template: `
		<form [formGroup]='form'>
			<input type="text" name="email" formCOntrolName='email'>
			<input type="text" name="password" formCOntrolName='password'>
			<div formGroupName='user'>
				<input type="text" name="name" formCOntrolName='name'>
				<input type="text" name="age" formCOntrolName='age'>
			</div>
		</form>
	`
)		
export class ReactiveForm implementOnInit {
	form: FormControl
	ngOnInit() {
		<!-- FormGroup param suld be object of FormControl instance -->
		this.form = new FormGroup({
			'email': new FormControl('', [Validators.required, Validators.email, this.customValidator]),
			'password': new FormControl('', Validators.required),
			user : new FormGroup({
				name: new FormControl(''),
				age: new FormControl('')
			})

		});
		<!-- FormControl 1 param its default  value 2 param array of sync validators  3 param array of async validators
		<!-- this.form.get('email'); it is returned FormControl
	}

	customValidator(control: FormControl) {
		<!-- There we lost context (this) this method called in form validators objects-->
		if(control.value.length < 6) {
			return {
				'errorCode': 'msg'
			}
		}
		return; <!-- input is valid -->
	}
}

HTTP 
OPTIONS request send and check is available server in current URL after that send POST, PUT , PATCH request

		
			Router

<!-- app.module.ts -->
@NgModule(
	imports: [
		AppRoterModule
	]
)
export class AppModule {
	
}
export class MyAuthGuard implements CanActivate {
	canActivate(){ 
		if(isLogined){
			return true;
		}else{
			return false;
		}
	}
}
<!-- app.rouer.module.ts -->
const router: Router = [
	{path: '', component: AppCOmponent},
	{path: '/cars/:id', component: CarCOmponent, canActivate:[MyAuthGuard]},
	<!-- MyAuthGuard (implements CanActivate) is service for autification -->
	{path: '/home', component: HomeComponent, children: [ 
	// in HomeComponent template we should be use <router-outlet></router-outlet>
		{path: '/my-home', component: MyHomeComponent}
	]},
	{path: '**', component: NotFound404Component},
	<!-- {path: '**', redirectTo: 'home'}, -->
];
@NgModule(
	imports: [
		RouterModule.forRoot(router)
	],
	exports: [
		RouterModule
	]
)
export class AppRoterModule {

}		
<!-- app.component.ts -->
@Component(
	selector: 'app-comp',
	template: `
<div>
	<a routerLink="/" routerLinkActive="active" [roterLinkeActiveOptions]='{exect: true}'>Home</a>
	<a routerLink="/cars" routerLinkActive="active">Cars</a><!-- added active class when route is current-->
	<a [routerLink]="['car', car.id, car.name]" [queryParams]="{'name': 'carnew'}" [fragment]="'HashURL'">Car</a>
	<router-outlet></router-outlet>
</div>
	`
)
export class AppComponent {
	constructor(private: route: Router){}

	changeUrl() {
		this.route.navigate('/cars');
		<!-- case 2 -->
		this.route.navigate(['/cars', 89], {
			queryParams: {
				name: 'newcar',
				color: 'red'
			}
		})
	}
}
@Component({
	selector: 'car-component',
	template : `

	`
})
export class CarsComponent {
	constructor(private route: ActivateRoute){}

	getParams(){ 
	<!-- this case we fet route one time after router change it not changed -->
		let id = this.route.snapshot.params['id'];
		let id = this.route.snapshot.queryParams['name'];
		let id = this.route.snapshot.fragment;
		<!-- this case use when router params can chage -->
		this.route.params.subscribe((params)=>{
			let id = params['id'];
		});
	}
}


		Module

@NgModule({
	declarations:[AppComponent, AppPipe, MyDirective] <!--declarate pipes, components directives -->
	imports: [FormModule, RouterModule, BrowserModule]<!-- we imports our modules-->
	providers: [AppService] <!-- we registred service -->
	bootstrap :[AppComponent] <!-- Program starting component AppComponent -->
})		
export class AppModule{
	
}


@NgModule({
	declarations:[],
	imports: [
		CommonModule, <!-- this module contains BAS functionality of Angular directves, pipe e.t.c.-->
		CarsRouterModule <!-- we should be create routin module for new module -->
	],
	providers:[]
})
export class CarsModule {
	
}
<!-- When we want use same directive in AppModule and CarsModule we should be create sharedModule in shared folder then declaret MyDirective and add sharedModule in modules in AppModule and Cars module -->

Lazy Loading

<!-- Lazy load CarsModule. DONT import CarsModule in app.module.ts canLoad <=> canActivate for autification -->
const appRoutes: Routes = [
	{path: 'cars', loadChildren: "./app/cars/cars.module#CarsModule", canLoad:[MyAuthGuard]}
]
@NgModule({
	imports: [],
	exports:[]
})
export class AppRoutingModule {
	
}

			Animation

in the polifile.ts file we can import js library for support old browsers version example es7 es6 etc.

@Component({
  selector: 'app-root',
  template: `<div [@clickedDivState] (click)="changeDivState()"></div>`,
  animations: [
    trigger('clickedDiv', [ <!-- clickedDiv is animation name , trigger is registred animation-->
      state('start', style({ <!-- start is state name -->
        backgroundColor: 'blue',
        width: '150px',
        height: '150px'
      })),
      state('end', style({
        backgroundColor: 'red',
        width: '300px',
        height: '300px'
      })),
      state('active', style({
        width: '170px',
        height: '170px',
        backgroundColor: 'orange'
      })),
      transition('start <=> end', animate('800ms ease-in')),
      transition('start => active', animate(400)),<!-- when changed state start to end state changed 400ms -->
      transition('active => end', animate(400)),
      transition('void => end', animate(400))<!-- void is any state to end-->
      transition('* => void', animate(400))<!-- * is any state to any-->
      transition(':enter', animate(400))<!-- enter is any state to any-->
      transition(':leave', animate(400))<!-- leave is any state to any-->
    ])
  ]
})
export class AppComponent {
  clickedDivState = 'start';

  changeDivState() {
    this.clickedDivState = 'end';
    setTimeout(() => {
      this.clickedDivState = 'start';
    }, 3000);
  }
}



Custom css or js files shouldbe include into angular-cli.json.
In the shared folder we should have global properties( services ,guard, etc. ) for all modules.
When create module we should be imports array add CommonModule <!-- it is included base functional of Angular directive, 
pipe component etc.
Custum module we should use  RouterModule.forChilde(router) NOT RouterModule.forRoot(router)

For SEO Angula4 we can use Title and Meta classes from angular/platform-browser 

ng buld --prod this command minify js scripts

					Lifecycle hooks
// ngOnChanges: Remember how properties are bound to components. These
// 	properties are reactive, meaning that, when they change, the view is updated as
// 	well. This lifecycle method is called when any property, bound to a view, is
// 	changed. Therefore, you can manipulate what happens before the changes are
// 	reflected.
// ngOnInit: This is the most common lifecycle. It is called after a component has
// 	been initialized with the default property bindings. Hence, it is called after the
// 	first ngOnChanges.
// ngDoCheck: Reactivity (change detection) is usually handled for you, but in
// 	extreme cases where it's not, you need to handle it yourself. Use ngDoCheck to
// 	detect and act upon changes that Angular can't or won't detect on its own.
// ngAfterContentInit: This is called after the component's content has been initialized.
// ngAfterContentChecked: This is called after every check on the component's content.
// ngAfterViewInit: This is called after initializing the view based on the	component's template.
// ngAfterViewChecked: This is called after checking a component's view and the child views of a component.
// ngOnDestroy: This is called before a component is destroyed. This is a good place for a clean-up.


				DOM manipulation
// for DOM manipulation use ElementRef. DON'T use document.*
1. ElementRef 
//The API to achieve Dom manipulation is ElementRef
constructor(private el: ElementRef) { }

ngAfterContentInit() {
 	this.tabContents = this.el.nativeElement.querySelectorAll('.tabcontent');
 	this.tabLinks = this.el.nativeElement.querySelectorAll('.tablink');
}				


// <app-counter #counter></app-counter>
 // <button (click)="counter.increment()">++</button>
 // <button (click)="counter.decrement()">--</button>
 @ViewChild(CounterComponent) counterComponent: CounterComponent

 //Directive 
ng generate directive when

 import { Directive, ElementRef } from '@angular/core';
@Directive({
 selector: '[appUiButton]'
})
export class UiButtonDirective {
	constructor(el: ElementRef,
		private templateRef: TemplateRef<any>,
 		private viewContainer: ViewContainerRef) 
	{
		Object.assign(el.nativeElement.style, {
			backgroundColor: '#ff00a6',
			padding: '7px 15px',
			fontSize: '16px',
			color: '#fff',
			border: 'none',
			borderRadius: '4px'
		})
	}

	@HostListener('mouseenter') onMouseEnter() {
		console.log(this.bgColor);
		this.el.nativeElement.style.backgroundColor = this.hoverBgColor ||'#000';
	}

	@HostListener('mouseleave') onMouseLeave() {
		this.el.nativeElement.style.backgroundColor = this.bgColor || '#ff00a6';
	}
}
// <button appUiButton>Click!!</button>

// We introduced a few members you're not familiar with yet. TemplateRef is a reference to the ng-template template that we saw 
// earlier, in which the DOM content we are controlling is contained.ViewContainerRef is a reference to the view itself

Pipes
// <div class="container">
//  <h2>{{0.5 | percent}}</h2>
//  <h3>{{'this is uppercase' | uppercase}}</h3>
//  <h2>{{50.989 | currency:'EUR':true}}</h2>
// </div>

import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
	name: 'reverse'
})
export class ReversePipe implements PipeTransform {
	transform(value: any, args?: any): any {
		return value.split('').reverse().join('');
	}
}
// <h3>{{'watch me flip' | reverse}}</h3>

Why Universal
There are three main reasons to create a Universal version of your app.

Facilitate web crawlers (SEO)
Improve performance on mobile and low-powered devices
Show the first page quickly