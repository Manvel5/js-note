//Yeoman generator for AngularJS with GulpJS
//https://github.com/swiip/generator-gulp-angular // 

//Data exchange between controllers
var app = angular.modeule('app',[]);
app.controller('c1', function($scope, test){
	$scope.test = test;
	$scope.test.name = "Mike";
});
app.controller('c2', function($scope, test){
	$scope.test = test; // test.name is Mike
});
app.factory('test', function(){ // Singleton
	return {
		name: "max"
	}
});
/////////////
//**********************
// <div ng-ontroller="FirstCtrl as first">
// 	<div ng-ontroller="Ctrl1 as ctrl1">
// 		<div ng-ontroller="Ctrl2 as ctrl2">{{ctrl1.age}}</div>
// 	</div>
// </div>
app.controller('FirstCtrl', function(){ // scope is depreceated
	this.age = 24;
});
app.controller('Ctrl2', function(){});
app.controller('Ctrl1', function(){});

//*******************Directive***********************
// <foo-bar>def text</foo-bar>
app.directive('fooBar', function(){
	return {
		restrict: 'E', //OR A OR AE OR AEMC class and comentarie
		transclude: true,
		template: '<div>this is foo bar <ng-transclude></ng-transclude></div>',// ng-transclude -> directive text //def text
		templateUrl: 'test.html', // angular try get test.html in $templateCache service then do ajax request
		scope: true, // default value false. if false one object two reference to scope. 
		//when scope = true directive scope extends controller scope 2 objects 2 referance
		link: function(scope, element, attr, ctrl, transclude){
			transclude(scope, function(html, scope){
				element.append(html);
			});
		}
	}
})

//************************************************
app.run(function($templateCache){ //worken when angular is stating
	$templateCache.put('test.html', '<h1>Test</h1>');
});

// we can use angular-new-router . it's like Angular 2+ routing https://angular.github.io/router/getting-started

// https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md


При каждом обновлении модели фреймворк запускает специальный цикл $digest, который проходит 
по всему приложению, применяет привязку данных и обновляет DOM.
Манипуляции с объектом DOM браузера — самая медленная операция.