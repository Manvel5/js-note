
@angular/core: наиболее важный пакет, содержащий основу Angular и его наиболее общие элементы, такие как директи­
	вы и компоненты. Этот модуль всегда следует импортировать в проект;
@angular/common: редко возникает необходимость явно импорти­ровать элементы из этого модуля, но стоит отметить, что этот
	пакет содержит определения всех директив, служб и фильтров,встроенных в Angular 2, вместе с соответствующими классами;
@angular/compiler: по аналогии с модулем common вам редко при­дется явно импортировать элементы из этого модуля. Он отве­чает 
	за компиляцию H T M L -шаблонов в код, который позволя­ет отобразить пользовательский интерфейс приложения;
@angular/platform-browser: содержит классы и функции, необ­ходимые для компоновки и взаимодействия с моделью DOM
	в контексте веб-браузера. Этот модуль дает возможность обра­батывать такие обычные действия, как обновление заголовка
	страницы и настройка распознавания жестов. Этот пакет содер­жит также функции, необходимые для компиляции шаблонов
	в автономном режиме при производственной эксплуатации;
@angular/platform-browser-dynamic: этот модуль часто будет упо­минаться в книге, поскольку он предоставляет функцию за­
	грузки, необходимую для инициализации приложений во вре­мя разработки;
@angular/http: это HTTP -клиент Angular 2, который подробнорассматривается в главе 6 «Асинхронная обработка данныхв Angular 2»;
@angular/router: это встроенный в Angular 2 маршрутизатор,который на момент написания этой книги все еще находился в стадии бета-версии;
@angular/router-deprecated: предыдущая версия встроенного маршрутизатора, обеспечивающая обратную совместимость
с существующими приложениями. В главе 7 «Маршрутизация в Angular 2» мы подробно рассмотрим его основные отличия
от нового маршрутизатора, еще находящегося на стадии раз­работки.

esб-shim: включает полифиллы, обеспечивающие совместимость с ECM AScript 6 для старых движков JavaScript (главным обра­зом для Microsoft Internet Explorer).
zone, js: полифилл для спецификации Zone. Используется для обработки изменений, обнаруженных в приложениях на осно­ве Angular 2;
reflect-metadata: привносит поддержку декораторов в классах Angular 2 и метаданных компонентов
SystemJS для управле­ния загрузкой и связыванием модулей.// alternativ webpack

npm install -g typings  // typings is typescript packege manager

ng serve --port 9001

var brand: string = 'Chevrolet'; //type string
var age: number = 7;// type number
var isZeroGreaterThanOne: boolean = false; // type boolean
var brands: string[] = ['Chevrolet','Ford', 'General Motors']; // type array
Динамическая типизация с помощью типа any
var distances: any[] = ['1000km', 1000];
enum Brands { Chevrolet, Cadillac, Ford, Buick, Chrysler, Dodge }; // type enum
var myCar: Brands = Brands.Cadillac;
resetPomodoro(): void {
	this.minutes = 24;
	this.seconds = 59;
}

// <app-player [position]="playerPosition"></app-player>
[position]; // Component --> Template 

//<app-player (positionChange)="onPositionChange($event)"></app-player>
(positionChange); // Template --> Component
[(post)]; //  Template <--> Component

Angular 2 будет использовать

интерфейсы,
типизация,
перечисления (Enum),
модификаторы (public, private, static),
декораторы (@).

function greetMe(name: string, greeting?: string, word: string = 'Hello'): string {} //greeting not required add word default value

function greetPeople(greeting: string, ...names: string[]): string {
	return greeting + ', ' + names.join(' and ') + '!';
}
alert(greetPeople('Hello', 'John', 'Ann', 'Fred'));

IException, определяющий схему типа с обязательным свойством message и необязательным числовым свойством id:
interface IException {
	message: string;
	id?: number;
}

// lib.js
export let foo = 'foo';
// main.js
System.import('./lib.js').then(libModule => {
	libModule.foo === 'foo'; // true
});

Менеджер пакетов jspm создан для модулей и загрузчиков модулей ES6.

Когда вы конфигурируете корневой модуль, используйте метод forRoot, 
для модулей функциональности применяйте метод forChild().

//Dependency Injection, DI and Inversion of Control, IoC.
var product = new Product();
createShipment(product);

если объект А зависит от объекта типа Б, то объект А не будет явно создавать объект Б
(в случае использования оператора new, как в предыдущем примере). 
Вместо этого объект Б будет внедрен из операционной среды. Объект А просто должен объявить следующее:
«Мне нужен объект типа Б; может ли кто-то его мне передать?» Слово «типа» здесь самое важное.
Объект А не запрашивает конкретную реализацию объекта, и его запрос будет удовлетворен, 
если внедряемый объект имеет тип Б.

Angular играет роль контейнера IoC и может предоставлять требуемые объекты в соответствии 
с объявлениями, сделанными в вашем компоненте.

Предположим, у вас имеется компонент ProductComponent, который получает подробную информацию о продукте с 
помощью класса ProductService.
Если вы не используете DI, то компонент ProductComponent должен знать, как создавать объекты класса ProductService. 
Это можно сделать несколькими способами, например, задействовать оператор new, какого-нибудь класса-фабрики. 
В любом из описанных случаев компонент ProductComponent становится тесно (жестко) связанным с классом ProductService.

DI позволяет отвязать компоненты приложения, избавив их от необходимости знать, как создавать зависимость.

когда вы добавили свойство providers в аннотацию @Component компонента ProductComponent, модуль DI, 
предоставляемый Angular, будет знать, что он должен создать объект типа ProductService.

DI позволяет более качественно тестировать компоненты отдельно друг от друга.

Каждый компонент может иметь объект Injector, который может внедрять объекты и 
примитивные значения в элемент или сервис.

В Angular вы можете внедрять данные только с помощью аргументов конструктора

Если нужно внедрить разные реализации определенного типа, примените более длинную нотацию:
@Component({
...
	providers: [{provide:ProductService, useClass:MockProductService}]
})
Она дает инъектору следующую инструкцию: «Когда нужно внедрить объект типа ProductService в компонент, 
создайте экземпляр класса MockProductService».

1. Чтобы соотнести токен и реализацию класса, используйте объект, имеющий свойство useClass, 
как показано в предыдущем примере.

2. При наличии функции фабрики, создающей объекты на основе определенных критериев, задействуйте объект
со свойством useFactory. Оно позволяет указать функцию фабрики (или анонимное стрелочное выражение),
которая знает, как создавать требуемые объекты. Такая функция может иметь необязательный аргумент 
с зависимостями, если они существуют.

3. Чтобы предоставить строку с простым внедряемым значением (например, URL сервиса),
обратитесь к объекту со свойством useValue.

///https://www.concretepage.com/angular-2/angular-2-4-providers-example

{ // InjectionToken , useValue example
	const BackendUrl = new InjectionToken<string>('Hello!');
	class AppComponent {
		constructor(@Inject(BackendUrl) public url: string) {}
	}
	@NgModule({
		...
		providers: [ {provide:BackendUrl, useValue: 'myQAserver.com'}]
	})	
}
{ // useFactory example 
	const randomFactory = () => { return Math.random(); };
	@NgModule({
		...
	  providers: [
	    { provide: 'Random', useFactory: randomFactory } 
	  ]
	})

	export class AppCompoennt {
	  value: number;

	  constructor(@Inject('Random') r) {
	    this.value = r;
	  }
}


// We use @Injectable() in our service class so that the service object can be created automatically for dependency injection 
// in any component or any other service class.

InjectionToken creates a token that can be used in dependency injection (DI) provider
export const HELLO_MESSAGE = new InjectionToken<string>('Hello!');
... 
providers: [ 
    { provide: HELLO_MESSAGE, useValue: 'Hello World!' }
]
...
constructor(@Inject(HELLO_MESSAGE) private message: string) { 
}

{ /// useClass example

	@Injectable()
	export class AnimalService {
		name = 'Animal';
		food = 'Food';	
		getName() {
			return this.name;
		}
	        getFood() {
			return this.food;
		}		
	}

	@Injectable()
	export class LionService extends AnimalService {
		name = 'Cow';
		food = 'Grass';	
	}
	// when we wont provide LionService we should be write { provide: AnimalService, useClass: LionService } 
	// providers :[LionService] NOT WORKING
	@NgModule({
		providers: [
			// LionService NOT WORKING
			{ provide: AnimalService, useClass: LionService } 
		]
	})
},
{ // useExisting example https://www.concretepage.com/angular-2/angular-2-4-providers-example
	providers: [ 
	    LaptopService,
	    { provide: DesktopService, useExisting: LaptopService }
	]
}

{
	//<child #child1></child>
	@ViewChild('child1');

	// <auction-stars [readonly]="false" class="large"></auction-stars>
	@Input() readonly: boolean = true;

	//user-list-component
	// <app-user-item [name]="name"></app-user-item>
	// AppUserItem component
	// @Input() name: string;
}

// Unit test 

Среда Jasmine позволяет реализовать процесс разработки через реализацию поведения (behavior-driven development (BDD)).

describe('MyCalculator', () => {
	it('should know how to multiply', () => {
	// Сюда помещается код, тестирующий умножение
	});
	it('should not divide by zero', () => {
	// Сюда помещается код, тестирующий деление на нуль
	});
});

it('msg' ,() => {
	expect(2 + 2).toEqual(4);
});
it('msg' ,() => {
	expect(2 + 2).not.toEqual(5);
})
expect(instance).toBe(instance);
expect(number).toBeCloseTo(number, decimalPlaces);
expect(mixed).toBeDefined();
expect(mixed).toBeFalsy();
expect(number).toBeGreaterThan(number);
expect(number).toBeLessThan(number);
expect(number).toBeNaN();
expect(mixed).toBeNull();
expect(mixed).toBeTruthy();
expect(mixed).toBeUndefined();
expect(array).toContain(member);
expect(mixed).toEqual(mixed);
expect(spy).toHaveBeenCalled();
expect(spy).toHaveBeenCalledTimes(number);
expect(spy).toHaveBeenCalledWith(...arguments);
expect(mixed).toMatch(pattern);
expect(fn).toThrow(string);
expect(fn).toThrowError(string);
// https://github.com/JamieMason/Jasmine-Matchers

it('is successfully instantiated', () => {
	const app = new AppComponent();
	expect(app instanceof AppComponent).toEqual(true);
});

Angular предоставляет вспомогательный класс TestBed, который позволяет объявлять модули, компоненты, поставщики и т. д.

beforeEach(() => {
	TestBed.configureTestingModule({
		imports: [ ReactiveFormsModule, RouterTestingModule,
		RouterTestingModule.withRoutes(routes)],
		declarations: [AppComponent, HomeComponent, WeatherComponent],
		providers: [{provide: WeatherService, useValue: {} }]
	})
});
вместо модуля RouterModule используется модуль RouterTestingModule,

inject([Router, Location], (router: Router, location: Location) => {
// Выполнение каких-либо действий
});
Функция async() запускается в Zone и может использоваться c асинхронными сервисами. Эта функция не заканчивает тест до тех пор,
пока не завершатся все его асинхронные операции или не истечет указанное время ожидания:
it(' does something', async(inject([AClass], object => {
	myPromise.then(() => { expect(true).toEqual(true); });
}), 3000));

В библиотеке тестирования Angular имеется интерфейс NgMatchers, который включает следующие сопоставления:
toBePromise() — ожидает, что значением будет Promise-объект;
toBeAnInstanceOf() — ожидает, что значением будет экземпляр класса;
toHaveText() — ожидает, что у элемента имеется в точности заданный текст;
toHaveCssClass() — ожидает, что у элемента имеется заданный класс CSS;
toHaveCssStyle() — ожидает, что у элемента имеются заданные стили CSS;
toImplement() — ожидает, что в классе реализован интерфейс заданного класса;
toContainError() — ожидает, что в исключении содержится заданный текст ошибки;
toThrowErrorWith() — ожидает, что функция при выполнении выдаст ошибку с заданным текстом ошибки.

it('should be able to navigate to product details using commands API',
	fakeAsync(inject([Router, Location], (router: Router, location: Location) => {
		TestBed.createComponent(AppComponent);
		router.navigate(['/products', 0]);
		tick();
		expect(location.path()).toBe('/product/0');
	});
));

Функция tick() позволяет выполнять асинхронный код в синхронном режиме.
TestBed.createComponent(), возвращающий объект ComponentFixture, который будет 
использоваться для работы с компонентами при их создании.
let fixture = TestBed.createComponent(ProductDetailComponent);
let element = fixture.nativeElement;
let component = fixture.componentInstance;

expect(element.querySelector('h4').innerHTML).toBe('iPhone 7');



//////////////////////
// Uploading to a Server
// Now – Realtime Global Deployments https://zeit.co/now
1. npm install -g now , cd dist
2. now

ng build --target=production --base-href /
This command tells the ng tool to build our application for a production environment. We also set
the --base-href to a single slash /.

// ngSwitch and ngSwitchCase
// 1 <div class="container" [ngSwitch]="myVar">
// 	2 <div *ngSwitchCase="'A'">Var is A</div>
// 	3 <div *ngSwitchCase="'B'">Var is B</div>
// 	4 <div *ngSwitchCase="'C'">Var is C</div>
// 	5 <div *ngSwitchDefault>Var is something else</div>
// 6 </div>

// NgStyle
// <div [style.background-color]="'yellow'">
// 	Uses fixed yellow background
// </div>

//<div [ngStyle]="{color: 'white', 'background-color': 'blue'}">
//  Uses fixed white text on blue background
//</div>

//ngClass
// <div [ngClass]="{bordered: false}">This is never bordered</div>


Свойство imports используется для перечисления других модулей, необходимых приложению.
Свойство declarations передает Angular список директив, компонентов и каналов(Pipe), необходимых приложению
Свойство bootstrap задает корневой компонент
Свойство providers определяет провайдеров служб (service)
@NgModule({
	imports: [BrowserModule, FormsModule, ReactiveFormsModule],
	declarations: [ProductComponent, PaAttrDirective, PaModel,
		PaStructureDirective, PaIteratorDirective,
		PaCellColor, PaCellColorSwitcher, ProductTableComponent,
		ProductFormComponent, PaAddTaxPipe, PaCategoryFilterPipe,
		PaDiscountDisplayComponent, PaDiscountEditorComponent,
		PaDiscountPipe, PaDiscountAmountDirective, PaDisplayValueDirective
	],
	providers: [DiscountService, SimpleDataSource, Model, LogService,
	{ provide: VALUE_SERVICE, useValue: "Apples" }],
	bootstrap: [ProductComponent]
})
export class AppModule { }


// Свойство exports
Для модуля, содержащего директивы и каналы, предназначенные для использования в других местах приложения,
 свойство exports становится самым важным свойством декоратора @NgModule,

 Tree shaking is a term commonly used in the JavaScript context for dead-code elimination
Tree shaking not working in Angular2, but worked in Angular4+
gulp-image-optimization
gulp-image
gulp-imagemin
image-webpack-loader

Default compilation in Angular 2+ Jit
AUT compilation used for production. // ng build --prod
<p id={{expression}}></p> equal <p [id]="expression"></p>