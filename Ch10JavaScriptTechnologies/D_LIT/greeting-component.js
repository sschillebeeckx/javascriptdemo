// Import Lit and necessary helpers
import { LitElement, html, css } from 'https://cdn.skypack.dev/lit';

class GreetingComponent extends LitElement {
    // Define styles for the component (plain CSS)
    static styles = css`
    .greeting {
      font-size: 24px;
      color: #333;
      padding: 10px;
      border: 2px solid #ccc;
      border-radius: 5px;
    }
  `;

    // Define properties (reactive in Lit)
    static properties = {
        name: { type: String },
    };

    constructor() {
        super();
        this.name = 'World'; // Default value
    }

    // Method to update the name
    updateName(event) {
        this.name = event.target.value;
    }

    // Render the HTML template (using template literals)
    render() {
        return html`
      <div class="greeting">
        <p>Hello, ${this.name}!</p>
        <input 
          type="text" 
          .value="${this.name}" 
          @input="${this.updateName}" 
          placeholder="Enter your name"
        />
      </div>
    `;
    }
}

// Register the component with a custom tag name
customElements.define('greeting-component', GreetingComponent);
