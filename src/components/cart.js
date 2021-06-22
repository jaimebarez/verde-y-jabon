import React from "react"
import { CartProvider, useCart } from "react-use-cart"

function Page({ data }) {
  const { addItem, emptyCart } = useCart()

  const products = [
    {
      name: "Bolsa de Sisal",
      id: "bolsa-de-sisal",
      image: "",
      price: 4.5,
    },
    {
      name: "Jabonera Handmade",
      id: "jabonera-handmade",
      image: "",
      price: 4.5,
    },
    {
      name: "Jabón de Casa con limón",
      id: "jabon-de-casa-con-limon",
      image: "",
      price: 4,
    },
    {
      name: "Jabón de Aloe Vera",
      id: "jabon-de-aloe-vera",
      image: "",
      price: 6.5,
    },
    {
      name: "Jabón de Café exfoliante",
      id: "jabon-de-cafe-exfoliante",
      image: "",
      price: 5,
    },
    {
      name: "Jabón de Arcillas",
      id: "jabon-de-arcillas",
      image: "",
      price: 5,
    },
    {
      name: "Jabón de Rosa Mosqueta",
      id: "jabon-de-rosa-mosqueta",
      image: "",
      price: 6.5,
    },
    {
      name: "Jabón de Caléndula",
      id: "jabon-de-calendula",
      image: "",
      price: 6.5,
    },
  ]

  return (
    <>
      <hr></hr>
      <center>
        <p>
          <b>
            <u>Simulador de pedido:</u>
          </b>
        </p>
      </center>
      <div class="div-table">
        <div class="div-table-row">
          <div class="div-table-col">
            {products.map(p => (
              <div class="div-table-item" key={p.id}>
                <button class="add_to_cart" onClick={() => addItem(p)}>
                  +
                </button>{" "}
                &nbsp;
                {p.name} <small>({p.price} €)</small>
              </div>
            ))}
            <br></br>
            <center>
              <button class="add_to_cart" onClick={() => emptyCart()}>
                &nbsp;Vaciar carrito&nbsp;
              </button>
            </center>
          </div>

          <div class="div-table-col" style={{ marginLeft: 1 + "em" }}>
            {<Cart></Cart>}
          </div>
        </div>
      </div>
    </>
  )
}

function Cart() {
  const { isEmpty, totalItems, items, updateItemQuantity, removeItem } =
    useCart()

  if (isEmpty) return <p>Sin artículos en su cesta</p>

  return (
    <>
      <span role="img" aria-label="basket">
        🧺
      </span>
      &nbsp;Cesta ({totalItems} artículo{totalItems > 1 ? "s" : ""}) - Total:{" "}
      {JSON.stringify(
        items.reduce((sum, product) => sum + product.itemTotal, 0)
      )}{" "}
      €<br></br>
      <br></br>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <button
              class="add_to_cart"
              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
            >
              -
            </button>
            &nbsp;
            <button
              class="add_to_cart"
              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
            &nbsp;
            <button class="add_to_cart" onClick={() => removeItem(item.id)}>
              &times;
            </button>
            &nbsp;
            <small>{item.quantity} x</small> {item.name} -{" "}
            <small>{item.price * item.quantity} €</small>
          </li>
        ))}
        <li>
          <small>Gastos de envío (opcional) - 5 €</small>
        </li>
        <li>
          <span role="img" aria-label="letter">
            ✉️
          </span>{" "}
          Contacta con nosotros para realizar tu pedido &nbsp;
          <span role="img" aria-label="letter">
            ✉️
          </span>
        </li>
      </ul>
    </>
  )
}

export default function VerdeyJabonCart() {
  return (
    <CartProvider>
      <Page />
    </CartProvider>
  )
}
