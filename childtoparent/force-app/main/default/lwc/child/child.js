import { LightningElement , track} from 'lwc';
import accmethod from '@salesforce/apex/comm/accmethod';

export default class Child extends LightningElement {
    @track accountdata = [];
    @track columns= [
        {label : 'Name', fieldName : 'Name'},
        {label : 'Phone', fieldName : 'Phone'}
    ];

    connectedCallback() {
        accmethod()
            .then(result=> {this.accountdata = result});

    }

    handlerowselection(event){
        const selectedrows = event.detail.selectedRows;
        if(selectedrows.length > 0){
            selectedAccount = selectedrows[0];
            this.dispatchevent(new CustomEvent('message',  {detail : selectedAccount}));
        }
        else(this.dispatchevent(new CustomEvent('message', {detail : null})));
    }
}