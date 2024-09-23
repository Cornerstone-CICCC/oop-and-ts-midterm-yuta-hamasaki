import { Component } from "../common/Component.js";

export class ProductItem extends Component {
  constructor(props) {
    super(props)
    this.handleAddToCart = this.handleAddToCart.bind(this)
  }

  handleAddToCart() {
    this.props.cartContext.addProduct(this.props.product)
  }

  render() {
    const product = document.createElement('div')
    product.innerHTML = `
    <div class="product_card">
      <img src=${this.props.product.image} alt="product_img"/>
      <h3>${this.props.product.title}</h3>
      <p>${this.props.product.price}</p>
      <p>${this.props.product.description}</p>
      <button class="add-to-cart-btn">Add to Cart</button>
    </div>
    `

    // Add click event to add to cart button
    product.querySelector('.add-to-cart-btn').addEventListener('click', this.handleAddToCart)

    return product;
  }
}