import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const { id } = action.payload;
            const existingItem = state.cartItems.find(item => item.id === id);

            if (existingItem) {
                existingItem.cartQuantity += 1;
            } else {
                state.cartItems.push({ ...action.payload, cartQuantity: 1 });
            }

            state.cartTotalQuantity += 1;
            state.cartTotalAmount += action.payload.price;

            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },
        removeFromCart(state, action) {
            const idToRemove = action.payload;
            state.cartItems = state.cartItems.filter(item => item.id !== idToRemove);

            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },
        calculateTotals(state) {
            const { total, quantity } = state.cartItems.reduce((cartTotal, cartItem) => {
                const { price, cartQuantity } = cartItem;
                const itemTotal = price * cartQuantity;

                cartTotal.total += itemTotal;
                cartTotal.quantity += cartQuantity;

                return cartTotal;
            }, { total: 0, quantity: 0 });

            state.cartTotalAmount = total;
            state.cartTotalQuantity = quantity;
        },
        decreaseCart(state, action){
            const itemIndex = state.cartItems.findIndex(
                cartItem => cartItem.id === action.payload.id
            )

            if(state.cartItems[itemIndex].cartQuantity > 1){
                 state.cartItems[itemIndex].cartQuantity -= 1
            }else if(state.cartItems[itemIndex].cartQuantity === 1){
                const nextCartItems = state.cartItems.filter(
                    (cartItem) => cartItem.id !== action.payload.id
                )

                state.cartItems = nextCartItems;
                localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
            }
        }
    },
});

export const { addToCart, removeFromCart, calculateTotals, decreaseCart } = cartSlice.actions;

export default cartSlice.reducer;
