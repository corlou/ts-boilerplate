const sayHello = require('./hello-world');

test('Says hello to Mr Anderson', () => {
  const neo = 'Mr Anderson';
  const result = sayHello(neo);
  expect(result).toEqual(`Hello ${neo}`);
});
