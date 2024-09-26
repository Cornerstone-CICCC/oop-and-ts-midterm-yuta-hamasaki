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
    <div class="image-container">
      <img src=${this.props.product.image} alt="product_img"/>
    </div>
    <div class="product-info">
        <h2>${this.props.product.title}</h2>
        <p>${this.props.product.description}</p>
        <div class="price-order">
            <span class="price">$${this.props.product.price.toLocaleString()}</span>
            <button class="add-to-cart-btn">Add Cart</button>
        </div>
      </div>
    </div>
`
  
    product.querySelector('.add-to-cart-btn').addEventListener('click', this.handleAddToCart)

    return product;
  }
}