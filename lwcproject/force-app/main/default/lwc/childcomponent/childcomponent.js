import { LightningElement, api, track } from 'lwc';

export default class Childcomponent extends LightningElement {
   
   @api Accounts;
   @track columns = [
        {label : 'name', fieldName : 'Name', editable : true},
        {label : 'Phone', fieldName : 'Phone', editable : true},
        {label : 'Industry', fieldName : 'Industry', editable : true}
    ];

}