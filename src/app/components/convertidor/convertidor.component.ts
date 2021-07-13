import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css']
})
export class ConvertidorComponent implements OnInit {
  cantidad = 0;
  tengo = 'USD';
  quiero = 'EUR';
  total = 0;

  monedas: string[] = ['USD', 'EUR', 'RD']
  constructor() { }

  ngOnInit(): void {
  }

  convertir(){
    switch(this.tengo){
      case 'USD':
        if(this.quiero === 'USD'){
          this.total = this.cantidad;
        } 
        if(this.quiero === 'EUR'){
          this.total = this.cantidad * 0.84;
        }
        if(this.quiero === 'RD'){
          this.total = this.cantidad * 57.05;
        }
        break;
      case 'EUR':
        if(this.quiero === 'USD'){
          this.total = this.cantidad * 1.19;
        } 
        if(this.quiero === 'EUR'){
          this.total = this.cantidad;
        }
        if(this.quiero === 'RD'){
          this.total = this.cantidad * 68.05;
        }
        break;
      case 'RD':
        if(this.quiero === 'USD'){
          this.total = this.cantidad * 0.018;
        } 
        if(this.quiero === 'EUR'){
          this.total = this.cantidad * 0.015;
        }
        if(this.quiero === 'RD'){
          this.total = this.cantidad;
        }
        break;
    }
  }
}
