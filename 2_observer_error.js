const { Observable } = require('rxjs');

const obs = new Observable((observer) => {
     console.log("Observable starts");
     setTimeout(() => { observer.next(1)}, 1000);
     setTimeout(() => { observer.next(2)}, 2000);
     setTimeout(() => { observer.error('error occured')}, 3000);
     setTimeout(() => { observer.next(4)}, 4000);
     setTimeout(() => { observer.next(5)}, 5000);
 });

 obs.subscribe((value) => {
     console.log('Subscription value: ', value);
 }, (err) => {
     console.log('Subscription error: ', err);
 })