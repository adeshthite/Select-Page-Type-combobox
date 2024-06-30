import { LightningElement } from 'lwc';


export default class SelectPageCheckBox extends LightningElement {

    selectedValue = '';

    variable1 = false;
    variable2 = false;
    variable3 = false;

    options = [

        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },

    ];


    handleChange(event) {
        this.selectedValue = event.detail.value;

        if (this.selectedValue == '1') {
            this.selectedValue = this.variable1 = true;

            this.selectedValue = this.variable2 = false;
            this.selectedValue = this.variable3 = false;

        } else if (this.selectedValue == '2') {
            this.selectedValue = this.variable2 = true;

            this.selectedValue = this.variable1 = false;
            this.selectedValue = this.variable3 = false;

        } else if (this.selectedValue == '3') {
            this.selectedValue = this.variable3 = true;

            this.selectedValue = this.variable1 = false;
            this.selectedValue = this.variable2 = false;

        }

    }
}