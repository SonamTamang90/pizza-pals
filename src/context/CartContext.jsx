import { createContext, useContext, useReducer } from "react";

// Initial state
const initialState = {
  items: [],
  totalAmount: 0,
  totalQuantity: 0,
};

// Action types
const CART_ACTIONS = {
  ADD_ITEM: "ADD_ITEM",
  REMOVE_ITEM: "REMOVE_ITEM",
  CLEAR_CART: "CLEAR_CART",
  UPDATE_QUANTITY: "UPDATE_QUANTITY",
};

// Cart reducer
const cartReducer = (state, action) => {
  switch (action.type) {
    case CART_ACTIONS.ADD_ITEM: {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      let updatedItems;
      if (existingItemIndex > -1) {
        // Item exists, update quantity
        updatedItems = state.items.map((item, index) => {
          if (index === existingItemIndex) {
            return {
              ...item,
              quantity: item.quantity + 1,
              totalPrice: (item.quantity + 1) * item.price,
            };
          }
          return item;
        });
      } else {
        // Add new item
        updatedItems = [
          ...state.items,
          {
            ...action.payload,
            quantity: 1,
            totalPrice: action.payload.price,
          },
        ];
      }

      // Calculate new totals
      const newTotalAmount = updatedItems.reduce(
        (sum, item) => sum + item.totalPrice,
        0
      );
      const newTotalQuantity = updatedItems.reduce(
        (sum, item) => sum + item.quantity,
        0
      );

      return {
        ...state,
        items: updatedItems,
        totalAmount: newTotalAmount,
        totalQuantity: newTotalQuantity,
      };
    }

    case CART_ACTIONS.REMOVE_ITEM: {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );

      if (existingItemIndex === -1) return state;

      let updatedItems;
      if (state.items[existingItemIndex].quantity === 1) {
        // Remove item completely
        updatedItems = state.items.filter((item) => item.id !== action.payload);
      } else {
        // Decrease quantity
        updatedItems = state.items.map((item, index) => {
          if (index === existingItemIndex) {
            return {
              ...item,
              quantity: item.quantity - 1,
              totalPrice: (item.quantity - 1) * item.price,
            };
          }
          return item;
        });
      }

      // Calculate new totals
      const newTotalAmount = updatedItems.reduce(
        (sum, item) => sum + item.totalPrice,
        0
      );
      const newTotalQuantity = updatedItems.reduce(
        (sum, item) => sum + item.quantity,
        0
      );

      return {
        ...state,
        items: updatedItems,
        totalAmount: newTotalAmount,
        totalQuantity: newTotalQuantity,
      };
    }

    case CART_ACTIONS.UPDATE_QUANTITY: {
      const { id, quantity } = action.payload;
      if (quantity < 0) return state;

      const updatedItems = state.items
        .map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: quantity,
              totalPrice: quantity * item.price,
            };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);

      const newTotalAmount = updatedItems.reduce(
        (sum, item) => sum + item.totalPrice,
        0
      );
      const newTotalQuantity = updatedItems.reduce(
        (sum, item) => sum + item.quantity,
        0
      );

      return {
        ...state,
        items: updatedItems,
        totalAmount: newTotalAmount,
        totalQuantity: newTotalQuantity,
      };
    }

    case CART_ACTIONS.CLEAR_CART:
      return initialState;

    default:
      return state;
  }
};

// Create context
const CartContext = createContext();

// Create provider component
export const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  // Cart actions
  const addItem = (item) => {
    dispatch({ type: CART_ACTIONS.ADD_ITEM, payload: item });
  };

  const removeItem = (itemId) => {
    dispatch({ type: CART_ACTIONS.REMOVE_ITEM, payload: itemId });
  };

  const updateQuantity = (itemId, quantity) => {
    dispatch({
      type: CART_ACTIONS.UPDATE_QUANTITY,
      payload: { id: itemId, quantity },
    });
  };

  const clearCart = () => {
    dispatch({ type: CART_ACTIONS.CLEAR_CART });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    totalQuantity: cartState.totalQuantity,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

// Custom hook to use cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
