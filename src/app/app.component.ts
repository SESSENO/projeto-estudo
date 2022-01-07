import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nome = 'Sérgio Sena';
  idade = 51;
  title = 'projeto-estudo';
  alturaImagem=30;
  larguraImagem=30;

  linkImagem ='https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg';

  calculaAnoNascimento(): number {
    const today = new Date();

    return today.getFullYear() - this.idade;
  }

  aumentar() {
    this.larguraImagem += 20;
    this.alturaImagem += 15;
  }

  diminuir() {
    this.larguraImagem -= 20;
    this.alturaImagem -= 15;
  }

}
