// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   items: [],
//   totalQuantity: 0,
// };

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addToCart: (state, action) => {
     

//       const itemIndex = state.items.findIndex((a)=>a.id == action.payload.id)
//       console.log(itemIndex)

//       if(itemIndex >= 0){
//         return state.items[itemIndex].quantity +=1

//       }else{
//         const temProduct = {...action.payload, quantity:1}
//         state.items.push(temProduct)
//       } 
//     },
//   },

  



// });

// export const { addToCart } = cartSlice.actions;
// export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  subTotal:0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.items.findIndex((a) => a.id === action.payload.id);

      if (itemIndex >= 0) {
        state.items[itemIndex].quantity += 1;
       
        
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
        
        
      }
      state.totalQuantity += 1;
      state.subTotal += action.payload.price;
      
    },




    removeFromCart: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload);
      console.log(index)
      if (index !== -1) {
        state.totalQuantity -= state.items[index].quantity;
        state.subTotal -= state.items[index].price * state.items[index].quantity;
        state.items.splice(index, 1);
      }
 
  },


  increaseTheProduct: (state,action)=>{
    
    const itemIndex = state.items.findIndex((item=>item.id === action.payload))
    const lastQuantity = state.items[itemIndex].quantity
    
    
    if(itemIndex >= 0){
      state.items[itemIndex].quantity +=1
      state.subTotal += state.items[itemIndex].price;
      
    }
    state.totalQuantity = state.totalQuantity + state.items[itemIndex].quantity -lastQuantity
    
  } ,


  decreaseTheProduct:(state,action)=>{

    const itemIndex =state.items.findIndex((item)=>item.id === action.payload)
  
    

    if(itemIndex !==1){
      
      if(state.items[itemIndex].quantity===1){
        state.items.splice(itemIndex,1)
      }else{
        state.items[itemIndex].quantity -=1
      }
      state.totalQuantity = state.totalQuantity - 1
      state.subTotal -= state.items[itemIndex].price;


    }

  },

  }
  
});

export const { addToCart,removeFromCart,increaseTheProduct,decreaseTheProduct } = cartSlice.actions;
export default cartSlice.reducer;

