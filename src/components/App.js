import { Component } from "../common/Component.js";
import { Header } from './Header.js';
import {Footer} from './Footer.js'
import { CartList } from "./CartList.js";
import { ProductList } from "./ProductList.js";

export class App extends Component {
  render() {
    const appContainer = document.createElement('div')
    appContainer.className = 'container'
    appContainer.innerHTML = `
      <div class="header_wrapper"></div>
      <div class="content_wrapper">
      <aside></aside>
        <main>
        <h1>Welcome to Yuta's fake shop</h1>
        </main>
      </div>
      <div class="footer_wrapper"></div>
    `

    // Create instance and render
    const header = new Header().render()
    const cart = new CartList({ cartContext: this.props.cartContext }).render()
    const footer = new Footer().render()

    const productList = new ProductList({ cartContext: this.props.cartContext })

    // Insert html into DOM
    appContainer.querySelector('.header_wrapper').appendChild(header)
    appContainer.querySelector('aside').appendChild(cart)
    appContainer.querySelector('.footer_wrapper').appendChild(footer)

    // Trigger mount method of ProductList
    productList.mount(appContainer.querySelector('main'))

    return appContainer;
  }
}