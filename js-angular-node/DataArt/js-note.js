function sleepSort(list, callback) {
	var result = [];

	list.forEach(function(i) {
		setTimeout(function() {
			result.push(i);
			
			if(result.length == list.length) {
				callback(result);
			}
		}, i);
	});
}

var list = [4,5,7,1,2,4,5];

sleepSort(list, alert);

a();
setTimeout(b, 0);
setTimeout(c, 0);
d();
b and c added in the event loop
// 1) was run a() then d() , b() , c()

Template to component binding 
	// 1) VirtualDOM (React)
	// 2) Abstract Syntax Tree (Angular2+, Angularjs)	 
//2) Abstract Syntax Tree 
After component init Angular saved copy all of values.
When data is changed Angular compare old and new values if it is diferent Angular updated View .

//Bind component to component

		ComponentA 
		|		|
		|		|
		^		^
   ComponentB  Component C	
   		|		
		|		
		^		
   ComponentD
// Antipaterb zone.js
 When data changed in the ComponentD we can update same data in parents components (ComponentB, ComponentA) 
 with zone.js
// Zone.js предоставляет механизм, называемый зонами, для перехвата асинхронных действий в браузере.
// Zone.js used for  debuging, testing, profiling 
// For example we have nestded functions A -> B ->  C -> D . in the D function we have Error.
// Without zone js in the browser console we can't see steeck trace it's log ONLY Function D
// but with zone js it's is log all steeck trace D <- C <- B <- A.

// Data binding for primitive types

// parent component iteration = 0; data = 'msg' user = {age: 25}
//<child-compnent [iteration]="iteration" [(data)]="data" [user]="user"></child-compnent>
@Component({
	......

})
class childCompnent{
	@input() data;
	@input() iteration;
	@input() user;
}
// primitive fields is NOT BINDING
When data or iteration is changed in childCompnent parent component data or iteration field not changed.
Field changed only in childCompnent.
we can solve this problem
	// 1) change value type to referance type but this case is slowly
	// 2) event emmiter is a good point

// Referance types is binding
When user object is changing in childCompnent it is changed in parent component.


/// How cn we reduce bundle size

//	1) compress picture gulp-image or image-webpack-loader
//	2) minify templates, styles, scripts
//	3) remove useless code ( dead code)	use Three shaking
//  Three shaking is removed dead code .
Angular2 not suported Three shaking. recomended use Angular2+.

//	Compilation
//1) JIT Compilation
//2) AOT Compilation

// JIT Compilation
	//1) Compiles in the browser
	//2) No need to build after change
	//3) Defauilt compiler in Angular 2 CLI

// AOT Compilation
	// 1) Code compiled inthe server side
	// 2) Faster loading
	// 3) AOT is more secure , because JIT uses eval

// after ng build ( without tree shaking and AOT ) bundle size is big

// ng build --prod. work AOT compiling and uses tree shaking 	

// ng build --prod not working in Angular2

//By default Angular uses the ChangeDetectionStrategy.Default change detection strategy.
// With ChangeDetectionStrategy.OnPush recomended use ImmutableJS
// when we use ChangeDetectionStrategy.OnPush ChangeDetection worked after referance change
//  recomended don't use DOM use ElementRef. @ViewChild, @ViewChildren