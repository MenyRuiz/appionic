import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
private costo: number;
private propina: number;
private totalPropina: number;
private totalGlobal: number


CalcularPropina(){
  this.totalPropina = this.costo * this.propina / 100;
  this.totalGlobal = this.costo * 1 + this.totalPropina * 1; 
}
}