class BasicGreetingElement extends HTMLElement {

  constructor() {
    super();

    this.greeting = "Hello Makers!"
    this.render = false;
  }
  
  connectedCallback() {
    console.log("Element has been mount");
    this.render = true;
    this.innerHTML = this.greeting;
  }

   disconnectedCallback() {
    console.log("Element has been unmount");
    this.render = false;
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (name === "name") {
      this.greeting = `Hola, ${newVal}`
    }
    if (this.render) {
      this.innerHTML = this.greeting;
    }
    console.log(`${name} ha cambiado de ${oldVal} a ${newVal}`);
  }

  static get observedAttributes() {
    return ["name"];
  }
};

window.customElements.define("basic-greeting", BasicGreetingElement);

class ErrorInfo extends HTMLElement {
  
  constructor() {
    super();

    this.attachShadow({
       mode: "open"
    })
    this.template = document.getElementById('notification');
    this.cloneTemplate = document.importNode(this.template.content, true);
  }

  connectedCallback() {
    //this.appendChild(this.cloneTemplate);
    this.shadowRoot.appendChild(this.cloneTemplate)
  }

  attributeChangedCallback(attr, oldVal, newVal) {

  } 

  static get observedAttributes() {
     return [""];
  }
}

window.customElements.define("error-info", ErrorInfo);