import { LightningElement, track } from 'lwc';

export default class HelloLifecycle extends LightningElement {
    @track msg = "Initial Message";

    constructor() {
        super();
        console.log("Constructor called");
    }

    connectedCallback() {
        console.log("Component Connected");
        this.msg = "Connected to DOM"; // update msg
    }

    renderedCallback() {
        console.log("Rendered Callback called");

        // grab the <p> tag and style it
        const pTag = this.template.querySelector("p");
        if (pTag) {
            pTag.style.color = "red";
        }
    }

    disconnectedCallback() {
        console.log("Component removed from DOM");
    }
}
