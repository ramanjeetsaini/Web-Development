// functions 
const sayHello = name => `Hello, ${name}`;
const flatter = () => `Look how gorgeous you look today`;
const sayGoodbye = name => `Goodbye, ${name}`;

// module exporting
module.exports.sayHello = sayHello;
module.exports.sayGoodbye = sayGoodbye;
module.exports.flatter = flatter;