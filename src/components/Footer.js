import { Component } from "../common/Component.js";

export class Footer extends Component {
  render() {
    const footer= document.createElement('footer')
    footer.innerHTML = `
      <nav>
          <p>copyright: ciccc-yutaHamasaki - 2024</p>
        <menu>
          <li><a href="#">Home</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </menu>
      </nav>
    `

    return footer;
  }
}