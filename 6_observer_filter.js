const { Observable } = require('rxjs');
const { startWith, filter } = require('rxjs/operators');

const obs = new Observable((observer) => {
     console.log("Observable starts")
     setTimeout(() => { observer.next(1)}, 1000);
     setTimeout(() => { observer.next(2)}, 2000);
     setTimeout(() => { observer.next(3)}, 3000);
     setTimeout(() => { observer.next(4)}, 4000);
     setTimeout(() => { observer.next(5)}, 5000);
 });

 obs.pipe(
     startWith(0), 
     filter((value) => value !== 2)
).subscribe((value) => {
     console.log('Subscription value:', value);
 });