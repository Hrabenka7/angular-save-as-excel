import { Component } from '@angular/core';
import {ExcelService} from './services/excel.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  name = 'Angular 6'
  data: any = [{
    Check: 'e101',
    Id: 'ravi',
    FechaRegistro: 1000,
    Sala: 1,
    Título: 'A',
    TiempoPractica: 'test',
    Mejora: 'test',
    Incremento: 'x',
    Formalización: 'gaidgiadgia',
    Retencion: 'dbgaisdgiadg',
    motivacional: 'hdiadhiadhiad'
     
    },
    {
    Check: 'e102',
    Id: 'ram',
    FechaRegistro: 2000
    },
    {
    Check: 'e103',
    Id: 'rajesh',
    FechaRegistro: 3000
    }
  ];
  constructor(private excelService:ExcelService){}

  exportAsXLSX():void {
    this.excelService.exportAsExcelFile(this.data, 'sample');
  }
}