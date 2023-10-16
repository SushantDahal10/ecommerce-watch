import { createSlice } from '@reduxjs/toolkit';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
  cartItems: [],
  cartQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity = state.cartItems[itemIndex].cartQuantity + 1;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
      }
    },
    removefromcart(state, action) {
      const nextCartItems = state.cartItems.filter((cartItem) => cartItem.id !== action.payload.id);
      state.cartItems = nextCartItems;
    },
    decreasecart(state, action) {
      const itemIndex = state.cartItems.findIndex((cartItem) => cartItem.id === action.payload.id);
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity =  state.cartItems[itemIndex].cartQuantity - 1;
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter((cartItem) => cartItem.id !== action.payload.id);
        state.cartItems = nextCartItems;
      }
    },
    increasecart(state, action) {
      const itemIndex = state.cartItems.findIndex((cartItem) => cartItem.id === action.payload.id);
      if (state.cartItems[itemIndex].cartQuantity >=1) {
        state.cartItems[itemIndex].cartQuantity =state.cartItems[itemIndex].cartQuantity + 1;
      }
    },
    clearcart(state, action) {
    state.cartItems=[];
    },
    
  },
});

export const { addToCart, removefromcart, decreasecart, increasecart,clearcart} = cartSlice.actions;
export default cartSlice.reducer;
