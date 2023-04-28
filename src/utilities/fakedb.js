const addToDb = id =>{
let shoppingCart = {};
    const storecart =localStorage.getItem('shopping-cart');
    if(storecart){
       
        shoppingCart =JSON.parse(storecart)
    }
    else{
        shoppingCart={};
    }
    const quantity = shoppingCart[id]
    if(quantity){

       const newQuantity = parseInt(quantity)+1;
       shoppingCart[id]=newQuantity
    //    localStorage.setItem(id,newQuantity)
    }
    else{
        shoppingCart[id]= 1;
            // localStorage.setItem(id,1)
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))

}
// remove from dasta base

const removeFromDb = id =>{
        const storecart = localStorage.getItem('shopping-cart')
        if(storecart){
            const shopping =JSON.parse(storecart)
            if(id in shopping){
                delete shopping[id];
                localStorage.setItem('shopping-cart', JSON.stringify(shopping))

            }
        }
}
export{addToDb , removeFromDb}