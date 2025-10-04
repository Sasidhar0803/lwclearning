import { LightningElement } from 'lwc';
import accreation from '@salesforce/apex/acc/accreation';

export default class Form extends LightningElement {
    accname;
    phone;
    lastname;

    handleaccchange(event){
        this.accname = event.target.value;
    }
    handlephnchange(event){
        this.phone = event.target.value;
    }
    handleconchange(event){
        this.lastname = event.target.value;
    }
    handlesave(){
        acccreation({accname : this.accname,
            phone : this.phone,
            lastname : this.lastname
        })
    }
}