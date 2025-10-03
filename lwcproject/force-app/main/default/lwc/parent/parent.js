
import { LightningElement, track } from 'lwc';
import accmethod from '@salesforce/apex/parentchild.accmethod';


export default class Parent extends LightningElement {
    accountname = '';
    @track accountdata = [];
handlechange(event) {
    this.accountname = event.target.value;
}

handleclick() {
 accmethod({Name : this.accountname})
 .then(result=> {this.accountdata = result;})
}
}