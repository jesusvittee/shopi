import React from 'react'


/**
 * This funtion calculates total price of a new order
 * @param {Array} products cartProducts Array of Objects
 * @returns {Number}Price Total
 */
function totalPrice(products) {
//   let sum = 0;
//   products.forEach(product => sum += product.price)
//   return sum
let total = products.reduce((almacen, product) => (
almacen + product.price
),0)
return total
}

export {totalPrice}