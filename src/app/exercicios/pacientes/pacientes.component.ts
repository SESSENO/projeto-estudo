import { Paciente } from './model/pacientes';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})
export class PacientesComponent implements OnInit {

  pacientes: Paciente[] = [
    { nome: "Sergio F Sena", idade: "51", sexo: "M", telefone:"11 99979-7942" },
    { nome: "Marsúpio Pina", idade: "21", sexo: "M", telefone:"12 89979-7833" },
    { nome: "Duvídio da Silva", idade: "31", sexo: "M", telefone:"51 98233-7546" },
    { nome: "Versilene Moraes", idade: "44", sexo: "F", telefone:"41 95219-1673" },
    { nome: "Serena Mascovich", idade: "61", sexo: "F", telefone:"31 94959-6972" },
    { nome: "Mirocolina Fernandes", idade: "24", sexo: "F", telefone:"21 94969-7948" }

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
