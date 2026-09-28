import { useReducer } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from "../redux/cartSlice";

const initialState = {
  message: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "ORDER_SUCCESS":
      return {
        message: "Order placed successfully",
      };

    case "CLEAR_MESSAGE":
      return {
        message: "",
      };

    default:
      return state;
  }
}

function Orders() {
  const [state, dispatchReducer] = useReducer(
    reducer,
    initialState
  );

  const dispatch = useDispatch();

  const items = useSelector(
    (state) => state.cart.items
  );

  const total = items.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  const handleOrder = () => {
    if (items.length === 0) {
      dispatchReducer({
        type: "CLEAR_MESSAGE",
      });

      return;
    }

    dispatchReducer({
      type: "ORDER_SUCCESS",
    });

    dispatch(clearCart());
  };

  return (
    <main className="page">

      <section className="page-header">
        <p>FARMER ORDERS</p>
        <h1>My Orders</h1>
        <span>
          Manage your farming products
        </span>
      </section>

      <section className="section">

        {items.length === 0 ? (
          <div className="empty-state">

            <div className="empty-icon">
              🛒
            </div>

            <h2>Your Cart is Empty</h2>

            <p>
              Add farming products to create an order.
            </p>

          </div>
        ) : (
          <div className="order-layout">

            <div className="order-items">

              {items.map((item) => (
                <div
                  className="order-item"
                  key={item.id}
                >

                  <div className="order-product-icon">
                    {item.icon}
                  </div>

                  <div className="order-product-info">

                    <h3>{item.name}</h3>

                    <p>
                      ₹{item.price}
                    </p>

                  </div>

                  <div className="quantity-control">

                    <button
                      onClick={() =>
                        dispatch(
                          decreaseQuantity(item.id)
                        )
                      }
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        dispatch(
                          increaseQuantity(item.id)
                        )
                      }
                    >
                      +
                    </button>

                  </div>

                  <button
                    className="remove-button"
                    onClick={() =>
                      dispatch(
                        removeFromCart(item.id)
                      )
                    }
                  >
                    Remove
                  </button>

                </div>
              ))}

            </div>

            <div className="order-summary">

              <h2>Order Summary</h2>

              <div className="summary-row">
                <span>Products</span>
                <span>{items.length}</span>
              </div>

              <div className="summary-row">
                <span>Total</span>
                <strong>₹{total}</strong>
              </div>

              <button
                className="submit-button"
                onClick={handleOrder}
              >
                Place Order
              </button>

            </div>

          </div>
        )}

        {state.message && (
          <div className="success-message">
            {state.message}
          </div>
        )}

      </section>

    </main>
  );
}

export default Orders;