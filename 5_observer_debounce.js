const { Observable } = require('rxjs');
const { debounceTime } = require('rxjs/operators');

const obs = new Observable((observer) => {
     console.log("Observable starts")
     setTimeout(() => { observer.next(1)}, 400);
     setTimeout(() => { observer.next(2)}, 800);
     setTimeout(() => { observer.next(3)}, 1700);
     setTimeout(() => { observer.next(4)}, 3000);
     setTimeout(() => { observer.next(5)}, 4000);
 });

 obs.pipe(debounceTime(1000)).subscribe((value) => {
     console.log('Subscription value:', value);
 });