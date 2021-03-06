const { Observable } = require('rxjs');

const obs = new Observable((observer) => {
     console.log("Observable starts")
     setTimeout(() => { observer.next(1)}, 1000);
     setTimeout(() => { observer.next(2)}, 2000);
     setTimeout(() => { observer.next(3)}, 3000);
     setTimeout(() => { observer.next(4)}, 4000);
     setTimeout(() => { observer.next(5)}, 5000);
     // setTimeout(() => { observer.error('error occured')}, 6000);
     // setTimeout(() => { observer.complete()}, 6000);
 });

 obs.toPromise().then((value) => {
     console.log('Promise result:', value);
 }, (err) => {
     console.log('Promise err:', err);
 })