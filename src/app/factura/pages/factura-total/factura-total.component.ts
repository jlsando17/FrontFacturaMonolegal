import { Component } from '@angular/core';

@Component({
  selector: 'app-factura-total',
  templateUrl: './factura-total.component.html',
  styleUrls: ['./factura-total.component.css']
})
export class FacturaTotalComponent {
 
  termino: string="";
 
  constructor(){}

  buscar(){
    console.log(this.termino);
  }
}
