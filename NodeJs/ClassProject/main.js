var TestObject = require('./hello');

to = new TestObject();
to.print();
to.whoAmI();

// EVENT EMITTER

var MisterEvent = require('./mister_event');
var MissEvent = require('./miss_event');
me1 = new MisterEvent();
me2 = new MissEvent();

me2.emit("callmister");
me2.emit("callmister");
