import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.css']
})
export class CreatePersonComponent implements OnInit {

  public idIniPer: number;
  public nameIniPer: string;
  public birthIniPer: string;

  public question_01: boolean;
  public txtQst_01: string;
  public idFrsKin: number;
  public nameFrsKin: string;
  public birthFrsKin: string;

  public question_02: boolean;
  public txtQst_02: string;
  public idScnKin: number;
  public nameScnKin: string;
  public birthScnKin: string;

  constructor() {
    this.idIniPer = 0;
    this.nameIniPer = "";
    this.birthIniPer = "";

    this.question_01 = false;
    this.txtQst_01 = "NO"
    this.idFrsKin = 0;
    this.nameFrsKin = "";
    this.birthFrsKin = "";

    this.question_02 = false;
    this.txtQst_02 = "NO"
    this.idScnKin = 0;
    this.nameScnKin = "";
    this.birthScnKin = "";
  }

  ngOnInit(): void {
  }

  questionKin01(): void {
    if (this.txtQst_01 === "NO") {
      this.txtQst_01 = "YES"
      this.question_01 = true;
    } else {
      this.txtQst_01 = "NO"
      this.question_01 = false;
    }
  }

  questionKin02(): void {
    if (this.txtQst_02 === "NO") {
      this.txtQst_02 = "YES"
      this.question_02 = true;
    } else {
      this.txtQst_02 = "NO"
      this.question_02 = false;
    }
  }

  updatePerson(perIni: String, kin01: String, kin02: String) {
    let dataPerIni = {
      pariente1: kin01,
      pariente2: kin02
    };
    fetch('http://localhost:3000/api/parientes/'+ perIni, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dataPerIni)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
      .catch(error => {
        console.log('Error:', error)
      })
  }

  createPersons(): void {

    if(this.idIniPer > 0 && this.nameIniPer !== "" && this.birthIniPer.toString() !== ""){
      let listPers = [{
        nombre: this.nameIniPer,
        nacimiento: this.birthIniPer,
        identificacion: this.idIniPer.toString()
      },
      {
        nombre: this.nameFrsKin,
        nacimiento: this.birthFrsKin,
        identificacion: this.idFrsKin.toString()
      },
      {
        nombre: this.nameScnKin,
        nacimiento: this.birthScnKin,
        identificacion: this.idScnKin.toString()
      }];
  
      for (let index = 0; index < listPers.length; index++) {
        if (listPers[index].identificacion != null) {
          fetch('http://localhost:3000/api/persona', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(listPers[index])
          })
            .then(response => response.json())
            .then(data => {
              console.log(data)
            })
            .catch(error => {
              console.log('Error:', error)
            })
        }
      }
  
      this.updatePerson(listPers[0].identificacion.toString(), listPers[1].identificacion.toString(), listPers[2].identificacion.toString());
  
      if(listPers[1].identificacion !== null){
        this.updatePerson(listPers[1].identificacion.toString(), listPers[0].identificacion.toString(), listPers[2].identificacion.toString());
      }
  
      if(listPers[2].identificacion !== null) {
        this.updatePerson(listPers[2].identificacion.toString(), listPers[0].identificacion.toString(), listPers[1].identificacion.toString());
      }
    } else {
      alert("Debe ingresar por lo menos los datos de una persona");
    }

  }
}
