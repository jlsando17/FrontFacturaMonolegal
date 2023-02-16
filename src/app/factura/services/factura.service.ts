import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable()
export class FacturaService {
   
   
  constructor(private http:HttpClient
  ){
    console.log("servicio factura")
  }
  getFactura():Observable<any>{
    
    return this.http.get<any>('http://localhost:7236/api/factura');
}
}
