import { LightningElement, track } from 'lwc';

export default class Parent extends LightningElement {
    @track selectedMessage = 'No row is selected';

    handleAccountSelect(event) {
        const selectedAccount = event.detail;
        if (selectedAccount) {
            this.selectedMessage = `Selected Account: ${selectedAccount.Name}, Phone: ${selectedAccount.Phone}`;
        } else {
            this.selectedMessage = 'No row is selected';
        }
    }
}
