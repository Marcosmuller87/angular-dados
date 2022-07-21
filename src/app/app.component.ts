import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  dadoIzq = '../assets/img/dado1.png';
  dadoDer = '../assets/img/dado2.png';
  numero1 = 1;
  numero2 = 2;

  jogarDados(): void {
    this.numero1 = Math.round(Math.random() * 5) + 1;
    this.numero2 = Math.round(Math.random() * 5) + 1;
    this.dadoIzq = '../assets/img/dado' + this.numero1 + '.png';
    this.dadoDer = '../assets/img/dado' + this.numero2 + '.png';
  }
}
