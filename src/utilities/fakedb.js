const addToDb = id =>{
    const quantity = localStorage.getItem(id)
    if(quantity){
        console.log('exis')

       const newQuantity = parseInt(quantity)+1;
       localStorage.setItem(id,newQuantity)
    }
    else{
            console.log('new')
            localStorage.setItem(id,1)
    }
    
}

export{addToDb}