import { Component } from '@angular/core';
import{FacturaService} from './factura/services/factura.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[FacturaService]
})
export class AppComponent {
  title = 'Factura';
  constructor(private dataSvc:FacturaService){}
  ngOnInit(): void {
    this.dataSvc.getFactura().subscribe(res=>{
      console.log('Res',res);
    });
  }
}
