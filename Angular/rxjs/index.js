{
	var streem$ = Rx.Observable.create(function(observer) {
		observer.next("one");
		setTimeout(function() {
			observer.next("1");
		}, 100);
		setTimeout(function() {
			observer.completed();//streem is closed memary empty
		}, 100);
		setTimeout(function() {
			observer.next("2");//this not called
		}, 1000);
		setTimeout(function() {
			observer.next("3");
		}, 10);
		observer.next("two");
	});
	streem$.subscribe(function(data) {
		// console.log(data)
	}, function (error) {
		console.log("error", error);
	}, function () {
		// console.log('completed')
	});
}

////////Event from Click ///////////////////
{
	var button = document.getElementById('send');
	var domEventStreem$ = Rx.Observable.fromEvent(button, 'click');
	domEventStreem$.subscribe(function($event) {
		console.log($event);// js MouseEvent object
	});
}
{
	var ofStreem$ = Rx.Observable.of(1, 'a', [2,3]);// its usually use for value types
	//streem has methods first, last, find, findIndex, skip, take skipWhile
	ofStreem$.subscribe(function(data) {
		// console.log("Next: ", data);
	});
	var intervalStreem$ = Rx.Observable.interval(1000).take(5);
	//take params is count after 5 iteration streem closed
	intervalStreem$.subscribe(function(data) {
		// console.log('interval',data)
	});
	var timeStreem$ = Rx.Observable.timer(5000, 500).take(5);
	//timer like interval. timer first param await ms(4 sec)
	timeStreem$.subscribe(function(data) {
		// console.log(data)
	});
	var rangeStreem$ = Rx.Observable.range(3, 5);
	rangeStreem$.subscribe(function(data) {
		// console.log(data);
	})
}
{
	var arrStrrem$ = Rx.Observable.from([1,2,5]);
	//param can be Array, Map, Set e.t.c
	arrStrrem$.map(function(item) {
		return item * 2;
	}).subscribe(function(item) {
		// console.log(item);
	});
	Rx.Observable.of("Hello", "World")
	.map(function(item) {
		return item.toUpperCase();
	})
	.subscribe(function(item) {
		// console.log(item);
	})
}
{
	//IMPORTANT BEST methods. debounce method await 2 sec after LAST event /////////////
	//its can use for scrole event
	var input = document.getElementById('textInput');
	var keyUpStreem$ = Rx.Observable.fromEvent(input, 'keyup')
	.debounce(2000)
	.distinct()//if data not changed subscribe not worked
	.subscribe(function(event) {
		// console.log(event.target.value)
	});
	//distinctUntilChanged() method return unique values
}
{
	var subject$ = new Rx.Subject();
	subject$.subscribe(function(data) {
		console.log('subject',data)
	});
	subject$.onNext(1);
	subject$.onNext(2);
	setTimeout(function() {
		subject$.onNext(3);
		subject$.onCompleted();
	})
}