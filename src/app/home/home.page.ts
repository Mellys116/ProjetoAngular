import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule],
})


export class HomePage {
 public gasolina: number | undefined;
 public alcool: number | undefined;
 public calculo: number | undefined;
 public resultado: string = "";
 constructor(private alertController: AlertController) {}


 async Comparar() {
 if (this.gasolina == null || this.alcool == null) {
 const alert = await this.alertController.create({
 header: 'Atenção',
 message: 'Por favor, digite os dois valores',
 buttons: ['OK']
 });
 await alert.present();
 return;
 }
 
this.calculo = this.alcool / this.gasolina;
console.log(this.calculo);


if (this.calculo <= 0.7){
  this.resultado = "Alcool é mais vantajoso :3";
}else{
  this.resultado = "Gasolina é mais vantajoso :0";
}
console.log('Resultado', this.resultado);
}
}