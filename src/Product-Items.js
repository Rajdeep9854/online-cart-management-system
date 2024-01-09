const productArray = [
    {
        id:1,
        title:"Coffe",
        price : 20
    },
    {
        id: 2,
        title: "Tea",
        price: 10
    },
    {
        id: 3,
        title: "Coca Cola",
        price: 30
    },
    {
        id: 4,
        title: "Sugar",
        price: 35
    },
    {
        id: 5,
        title: "Salt",
        price: 13
    },
    {
        id: 6,
        title: "Mango",
        price: 100
    },
    {
        id: 7,
        title: "Soap",
        price: 80
    },
    {
        id: 8,
        title: "Sampoo",
        price: 5
    }

]

function getProductData(id){
    let productdata = productArray.find((product)=> product.id===id);
    if(productdata === undefined){
        console.log("product data does not exists for id "+ id);
        return undefined;
    }
    return productdata;
}

export {productArray , getProductData};