const cart = [
    {
        item: "Notebook", price: 150, stock: 5    
},
{ item: "Pen", price: 30, stock: 0},
{ item: "Bag", price: 1200, stock: 2},
{ item: "Eraser", price: 20, stock: 8},
];
const totalPrice = cart.reduce((total, product) => {
    return total + product.price;
},
 0);
 console.log("Total Price:", totalPrice);
 const outofStock = cart.find(product => product.stock === 0);
 if (outofStock) {
    console.log(`Warning: $ 
        {outofStock.item} is out of stock.`);
 }
 const newCart = [ ...cart,
    { item: "Pencil", price: 25,stock: 10 }
 ];
 console.log(newCart);