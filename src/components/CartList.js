import { Component } from "../common/Component.js";
// import {cartItems} from "../components/CartItem.js"

export class CartList extends Component {
  constructor(props) {
    super(props)
    this.state = { cart: [] }
    this.updateCart = this.updateCart.bind(this)
    this.handleRemove = this.handleRemove.bind(this);
    this.props.cartContext.subscribe(this.updateCart);
    this.productsListElement = null
  }

  updateCart(cart) { 
    this.state.cart = cart
    // console.log(cart)
    this.productsListElement.innerHTML = ''


    cart.forEach(item => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
      ${item.title} - $${item.price} &times;
      <input type="number" value="${item.quantity}" class="itemAmount" min="1" />
      <button class="deleteBtn">&times;</button>
    `;
      this.productsListElement.appendChild(listItem);

      const deleteBtn = listItem.querySelector('.deleteBtn');
      deleteBtn.addEventListener('click', () => this.handleRemove(item.id));


      const itemAmount = listItem.querySelector('.itemAmount');
      itemAmount.addEventListener('change', (event) => {

        const newQuantity = parseInt(event.target.value);
        this.props.cartContext.updateQuantity(item.id, newQuantity);
      });
    });

    this.updateTotal();
    this.updateQuantity();
  }

  //total PRICE
  updateTotal() {
    const totalAmount = this.props.cartContext.totalAmount;
    this.totalOutput.innerHTML = `<h2>Total: $${totalAmount.toLocaleString()}</h2>`;
  }

  //amount of ITEMS
  updateQuantity(){
    const totalQuantity = this.props.cartContext.totalQuantity;
    if(totalQuantity === 20 || totalQuantity === 25 ){
      alert("Are you sure? You are buying too much! Please check if the amount is correct!!!!!!!")
    }
    this.totalQuantityOutput.innerHTML = `<p>${totalQuantity} items</p>`
  }

  handleRemove(id){
    this.props.cartContext.removeProduct(id)
  }
  handleCheckout(){
    alert("Thank you!")
  }


  render() {
    const cartElement = document.createElement('div')
    cartElement.innerHTML = `
      <h3>🛒 Cart 🛒</h3>
      <ul>
      </ul>
      <p>${0} items</p>
      <h2>
      Total:$${0}
      </h2>
      <button class="checkoutBtn">Check out</button>
    `
  
    this.productsListElement = cartElement.querySelector('ul')
    this.totalOutput = cartElement.querySelector('h2');
    this.totalQuantityOutput = cartElement.querySelector("p")
    cartElement.querySelector(".checkoutBtn").addEventListener('click', this.handleCheckout)

    return cartElement;
  }
}