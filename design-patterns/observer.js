// Observer
class Subscriber {
    constructor(name, callback) {
        this.name = name;
        this.callback = callback;
    }

    notify(msg) {
        console.log("Subscriber " + this.name + " is notified!");
        this.callback(msg);
    }
}

class Observable {
    constructor(name) {
        this.subscribers = [];
        this.name = name;
    }

    subscribe(subscriber) {
        this.subscribers.push(subscriber);
    }

    unsubscribe(subscriber) {
        let index = this.subscribers.indexOf(subscriber);
        if (index !== -1) {
            this.subscribers.splice(index, 1);
        }
    }

    notifySubscribers(msg) {
        this.subscribers.forEach(subscriber => {
            subscriber.notify(msg);
        });
    }
}

let publisher = new Observable("Journal");

let subscriber1 = new Subscriber("John", function(msg) {
    console.log(msg + '!!!');
});
let subscriber2 = new Subscriber("Ann", function(msg) {
    console.log(msg);
});
let subscriber3 = new Subscriber("Katy", function(msg) {
    console.log(msg + '!!');
});
let subscriber4 = new Subscriber("Michael", function(msg) {
    console.log(msg + '!');
});

publisher.subscribe(subscriber1);
publisher.subscribe(subscriber2);
publisher.subscribe(subscriber3);
publisher.subscribe(subscriber4);

setTimeout(function() {
    publisher.notifySubscribers("Current time: " + new Date())
}, 2000);

