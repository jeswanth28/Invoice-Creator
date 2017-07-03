import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
		invoiceObject:any={
			items:[{name:'Item1',price:'500',quantity:'2'}],
			taxItems:[{name:'Swach Bharath',amount:'5'}],
			itemsAmount:0,
			taxAmount:0,
			image:''
		}
		itemIndex:number=-1;
		taxIndex:number=-1;
		name:string='';
		price:string='';
		quantity:string='';
		taxName:string='';
		amount:string='';

		constructor(){

		}
		ngOnInit(){
			this.calculateAmount();	
		}
		
		addItem(){
				this.invoiceObject.items.push({name:'Item1',price:'500',quantity:'2'});
				this.calculateAmount();
		}
		editItem(i,name,price,quantity){
			this.name=name;
			this.price=price;
			this.quantity=quantity;
			this.itemIndex=i;
		}
		addServiceItem(){
				this.invoiceObject.taxItems.push({name:'Swach Bharath',amount:'5'});
				this.calculateAmount();
		}
		edittaxItem(i,name,amount){
			this.taxName=name;
			this.amount=amount;
			this.taxIndex=i;
		}

		saveItems(){
			if(this.itemIndex!=-1){
			this.invoiceObject.items[this.itemIndex].name=this.name;
			this.invoiceObject.items[this.itemIndex].price=this.price;
			this.invoiceObject.items[this.itemIndex].quantity=this.quantity;
			this.itemIndex=-1;
		}
		else if(this.taxIndex!=-1){
				this.invoiceObject.taxItems[this.taxIndex].name=this.taxName;
				this.invoiceObject.taxItems[this.taxIndex].amount=this.amount;
				this.taxIndex=-1;
		}
		this.calculateAmount();

		}

		deleteItem(index,flag){
			if(flag==true){
					this.invoiceObject.items.splice(index,1);
			}
			else if(flag==false){
				this.invoiceObject.taxItems.splice(index,1);
			}
				this.calculateAmount();
		}
		  handleFileSelect(evt){
      var files = evt.target.files;
      var file = files[0];
    
    if (files && file) {
        var reader = new FileReader();

        reader.onload =this.handleReaderLoaded.bind(this);

        reader.readAsBinaryString(file);
    }
  }
  
  handleReaderLoaded(readerEvt) {
     var binaryString = readerEvt.target.result;
            this.invoiceObject.image= btoa(binaryString);
            
    }
		calculateAmount(){
			this.invoiceObject.itemsAmount=0;
			this.invoiceObject.taxAmount=0;
			for(let i=0;i<this.invoiceObject.items.length;i++){
				this.invoiceObject.itemsAmount+=parseInt(this.invoiceObject.items[i].price)*parseInt(this.invoiceObject.items[i].quantity);

			}
			for(let i=0;i<this.invoiceObject.taxItems.length;i++){
				this.invoiceObject.taxAmount+=parseInt(this.invoiceObject.taxItems[i].amount)

			}
		}
		printObject(){
			console.log(this.invoiceObject);
		}


}
