import { LightningElement , api} from 'lwc';

export default class ChildParentRelationShipExample extends LightningElement {
    @api productDetails;
    quantity=0;
    connectedCallback(){
    console.log('Data=>',this.productDetails);
    }
    handelSentToParent(){
        this.quantity++;
        if(this.quantity < 4){
            const customEvent = CustomEvent('event',{
                detail : this.quantity
            });
            this.dispatchEvent(customEvent);
        }
        
    }
   
}