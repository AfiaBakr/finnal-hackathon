import { Food } from "../type/food";



export const addToCart = (food: Food) => {
      const cart: Food[] = JSON.parse(localStorage.getItem("cart") || "[]");
      const existingFoodIndex =cart.findIndex((item: { _id: string; }) =>item._id === food._id);

      if (existingFoodIndex > -1) {
        cart[existingFoodIndex].quantity += 1;
      }
      else {
        cart.push({
        ...food, quantity:1
      });
    }
    localStorage.setItem('cart',JSON.stringify(cart));

};


     export const removeFromCart =(foodId : string)=>{
        let cart:Food[] = JSON.parse(localStorage.getItem('cart') || '[]')
        cart = cart.filter(item => item._id ! === foodId )
        localStorage.setItem('cart',JSON.stringify(cart))
        
     };

     export const updateCartQuantity =(foodId : string, quantity :number)=>{
        
        const cart : Food[] = JSON.parse(localStorage.getItem('cart') || '[]')
        const foodIndex = cart.findIndex(item => item._id === foodId);
        
        
        if (foodIndex > -1) {
            cart [foodIndex].quantity = quantity;
            if (quantity <= 0) {
               cart.splice(foodIndex, 1); 
        }
        else {
         cart[foodIndex].quantity = quantity;}

        localStorage.setItem("cart", JSON.stringify(cart));
      } 
     }
     export const getCartItems =() : Food[] => {
        return JSON.parse  (localStorage.getItem('cart') || '[]')  
     }