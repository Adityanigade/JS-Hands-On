const productsData = await fetch("https://fakestoreapi.com/prod ucts");

const products = await productsData.json();

for (const product of products) { 
    console.log('${product.id), ${product.title}');
}