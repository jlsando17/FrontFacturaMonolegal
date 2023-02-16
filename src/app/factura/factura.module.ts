import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { FacturaTotalComponent } from './pages/factura-total/factura-total.component';





@NgModule({
  declarations: [FacturaTotalComponent],
  exports:[
    FacturaTotalComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class FacturaModule { }
