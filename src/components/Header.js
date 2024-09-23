import { Component } from "../common/Component.js";

export class Header extends Component {
  render() {
    const header = document.createElement('header')
    header.innerHTML = `
      <div>Yuta's fake shop</div>
      <nav>
        <menu>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </menu>
      </nav>
    `

    return header;
  }
}