import { Component } from '@angular/core';
import { FacturaService } from '../../services/factura.service';

@Component({
  selector: 'app-factura-total',
  templateUrl: './factura-total.component.html',
  styleUrls: ['./factura-total.component.css']
})
export class FacturaTotalComponent {
 
  
 
  constructor(
    private FacturaService:FacturaService
  ){
     this.FacturaService.getFactura().subscribe(resp=>{
       console.log(resp)
     })
  }

 
}
