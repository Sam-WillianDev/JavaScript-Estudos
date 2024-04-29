const shoppingCart = []

function addItemTocart(item){
    shoppingCart.push(item)
}

function removeItemFromCart(item){
    const index = shoppingCart.indexOf(item);
    if(index !== -1){
        shoppingCart.splice(index,1)
    }
}

 function viewCart(){
    if(shoppingCart.length == 0){
        console.log("Seu carrinho de shopping está vazio")
    }else{
        console.log("Itens no seu carinho de shopping")
        for(let i = 0; i < shoppingCart.length; i++){
            console.log(`${i + 1} - ${shoppingCart[i]}`)
        }
    }
 }

 function clearCart (){
    shoppingCart.length = 0
    console.log("Seu carrinho foi limpo")
 }

 addItemTocart("Tennis")
 addItemTocart("blusa") 
 addItemTocart("Short")
 viewCart()
 removeItemFromCart("blusa")
 viewCart()
 clearCart()