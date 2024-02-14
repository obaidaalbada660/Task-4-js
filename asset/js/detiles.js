async function getdetileToproduct(){
    const urlParms = new URLSearchParams(window.location.search);
    const productid = urlParms.get('id');
    const respone =  await axios.get(`https://dummyjson.com/products/${productid}`);
    const data = respone.data;
    
    let{title , description , price , thumbnail} = data;
    document.querySelector(".detiles-product").innerHTML = 
    `<h2 class="title"> ${title}</h2>
    <p class="description"><span></span> ${description}</p>
    <span class="price"> ${price}$</span>
    <img src="${thumbnail}" alt="product image"/>
    `;
}

getdetileToproduct();



