
// fetching data from API call
fetch("https://dummyjson.com/products")
.then((Response) => {
    if(!Response.ok){ // checking for status and throwing error if status is not OK
        throw Error(Response.status);
    }
    return Response.json(); // return json object 
})
.then((data)=>{
    // getting data into products array from data object
    const products = data.products;


    // using map method for manupulating data according to requirement in a sequence 
    products.map((product)=>{

        // getting product section for adding or appending data 
        let productSection = document.getElementById('products');

        // creating div for each product and assigning product class to it
        let productDiv = document.createElement('div');
        productDiv.setAttribute('class', 'product');

        // creating image and assigning source from data
        let img = document.createElement('img');
        img.src = product.images[0];

        // creatinng a div and appending the other information 
        let innerDiv = document.createElement('div');
        innerDiv.setAttribute('class', 'inner'); //assigning inner class

        // assigning required information to the innerDiv element
        innerDiv.innerHTML = `<p>ID: <strong> ${product.id}</strong></p>`;          //ID
        innerDiv.innerHTML += `<p>Title: <strong> ${product.title}</strong></p>`;   // Title
        innerDiv.innerHTML += `<p>Brand: <strong>${product.brand}</strong></p>`;    // Brand
        innerDiv.innerHTML += `<p>Price: $<strong>${product.price}</strong></p>`;    // Price
        innerDiv.innerHTML += `<p>Rating: <strong>${product.rating}</strong></p>`;  // Rating
        innerDiv.innerHTML += `<p>Stock: <strong>${product.stock}</strong></p>`;    // Stock
        innerDiv.innerHTML += `<p>Discount: <strong>${product.discountPercentage}</strong>%</p>`;    // Discount
        innerDiv.innerHTML += `<p><strong>Description:</strong> <br>${product.description}</p>`;    // description

        // appending image child into product div element
        productDiv.appendChild(img);

        // appending inner div and product div into product div element
        productDiv.appendChild(innerDiv);
        productSection.appendChild(productDiv);

    })
})
.catch(e => { //catching error if promise is not resolved 
    console.log(e);
});