async function getproduct(){
const respone = await axios.get("https://dummyjson.com/products");
const data = await respone.data;
const products = data.products;

const result = products.map(function(product){
    return `
    <div class="product">
    <img src = "${product.thumbnail}"/>
    <h2>${product.title}</h2>
    <span class="price">${product.price}$</span>
    <span>${product.brand}</span>
    <a href="detiles.html?id=${product.id}">Detiles</a>
    </div>
    `;

}).join(" ");

document.querySelector(".products").innerHTML = result;
}

getproduct();

