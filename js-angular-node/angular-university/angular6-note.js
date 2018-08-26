const mouse$ = Observable.fromEvent(document, 'mousemouve').
	filter((event: MouseEvent) => event.clientY > 200);
mouse$.subscribe(event => console.log(event));
//fromEvent
const click$ = Observable.fromEvent(document, 'click');
// combineLatest like Promise.all
const combine$ = Observable.combineLatest(mouse$, click$);
//combineLatest worked after emmit click and mouve streams.
combine$.subscribe(event => console.log('event'));
const lessonPromisse = fetch('/lesson').then(res => res.json());
// fromPromise
const lesons$ = Observable.fromPromise(lessonPromisse);
lesons$.subscribe(res => console.log(res));
/// map
const filtededLessons$ = lesons$.map(lessons => lessons[0]);
// retry() and retryWhen()
{
	sub$: Subscription;
	sub$ = lesons$.retryWhen(error => error.delay(5000)); // it's like setInterval((),5000);
	setTimeout(() => {
		sub$.unsubscribe(); /// cancel network request
	}, 15000);
}
///////////////////HttpHeaders, HttpParams
{
	let headers = new HttpHeaders();
	headers  = headers.append('header-1', 'value-1');
	headers  = headers.append('header-2', 'value-2');

    let params = new HttpParams();
    params = params.append('param-1', 'value-1');
    params = params.append('param-2', 'value-2');
    this.httpClient.get("/lesons", {headers , params })
}
{
	// pipe async
	<p>{{ promiseData }}</p> 
    <p>{{ promiseData?.length }}</p>
	
	promiseData: string; // olso it's can be Observable
	constructor() {
		this.getPromise().then(v => this.promiseData = v); 
	}
	getPromise() {  
	 return new Promise((resolve, reject) => {
	   setTimeout(() => resolve("Promise complete!"), 3000);
	 });
	}
}

// for running in the mobile devices we need to install hammer.js and import it in the main.ts file

//The online IDE for web applications.
//https://stackblitz.com/