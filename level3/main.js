// main.js

const factorial = require('./factorial');
const fibonacci = require('./fibonacci');
const { addOrder, updateOrderStatus, getOrders, getOrderById } = require('./orders');

// Contoh penggunaan faktorial
const number = 5;
console.log(`Faktorial dari ${number} adalah: ${factorial(number)}`);

// Contoh penggunaan Fibonacci
console.log(`Deret Fibonacci hingga elemen ke-${number} adalah:`);
for (let i = 0; i < number; i++) {
  console.log(fibonacci(i));
}

// Contoh penggunaan modul orders
const order1 = addOrder('Agung', [
  { name: 'Bakso', price: 20000 },
  { name: 'Pop es', price: 5000 }
]);

const order2 = addOrder('Sugeng', [
  { name: 'Sop Iga sapi', price: 25000 },
  { name: 'Jus Alpikat', price: 12000 }
]);

console.log('Daftar Pesanan:');
console.log(getOrders());

updateOrderStatus(order1.id, 'Diproses');
console.log(`Pesanan ID ${order1.id} setelah diperbarui:`);
console.log(getOrderById(order1.id));

console.log('Daftar Pesanan Terbaru:');
console.log(getOrders());
