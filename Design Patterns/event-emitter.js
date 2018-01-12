class EventEmitter {
  constructor() {
    this.events = {};
  }

  subscribe(name, fn) {
    const event = this.events[name] || [];
    this.events[name] = event;
    event.push(fn);
  }

  emit(name, data) {
    const event = this.events[name];
    if (event) event.forEach(fn => fn(data));
  }
}

const ee = new EventEmitter();

ee.subscribe('smth', (data) => {
  console.dir(data);
});

ee.subscribe('inc', (data) => {
  data++;
  console.log(data);
});

ee.emit('smth', { a: 5 });
ee.emit('inc', 5);