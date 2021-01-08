let products=[
    {name: "Creme Brulee Cookie", price: 20},
    {name:"White Choco Orea Cookie", price:20},
    {name:"Mixed Dates Cookie", price:30},

];
let cart=[];
let total = 0;
document.getElementById("cart").innerHTML ="";

function addToCart(index) {

    let product = products[index];

    //add to every time we add to the cart
    total = total + product.price;

    cart.push(product);

    console.log(cart);

    let list = document.getElementById("cart");

    list.innerHTML+= `<li>${product.name}, ${product.price} </li>`;

    document.getElementById("total").innerText = `total:${total} KD`;
}