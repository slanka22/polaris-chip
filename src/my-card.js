import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "My card";
    this.image = "https://avatars.githubusercontent.com/u/170651362?s=200&v=4"
    this.description = "Goodbye"
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      h1 {
        color:blue;
      }
    `;
  }

  render() {
    return html`
    <div>
      <h1>${this.title}</h1>
      <img src = "${this.image}" alt ="${this.title}" />
      <p>${this.description}</p>
    </div>`
  }

  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      description: { type: String },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
