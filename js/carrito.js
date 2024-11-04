const cartItems=[];

export const createProduct = (id,title,price) =>({id,title,price});

// console.log(createProduct)

export const getCartItems=()=>{
    console.log(cartItems)
    return[...cartItems];
};

export const addToCart=(product,quantity)=>{
    const existInTheCart=cartItems.find((item)=>item.id===product.id);

    


    if(existInTheCart){
        existInTheCart.quantity+=1;
    }else{
        cartItems.push({product, quantity});

    
    }

    console.log(product, 1)

    
};

