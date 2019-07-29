class FancyButton extends HTMLButtonElement {

  constructor() {
    super();

    this._onButtonClicked = this._onButtonClicked.bind(this);
  }

  _onButtonClicked() {
    this.setAttribute("disable", "disable");
    this.innerText = "Guardando";  
  }

  connectedCallback() {
    this.addEventListener('click', this._onButtonClicked);
  }

  disconnectedCallback() {
    this.removeEventListener('click', this._onButtonClicked);
  }
}

window.customElements.define('deactivable-button', FancyButton, {
  extends: "button",
})