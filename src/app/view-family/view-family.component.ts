import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-family',
  templateUrl: './view-family.component.html',
  styleUrls: ['./view-family.component.css']
})
export class ViewFamilyComponent implements OnInit {

  public idPerson : number;
  public statusSearch : boolean;
  public dataTest = [{idPerson:"111111", name: "PPPPP", birth: "01/01/0001"}, 
                     {idPerson:null, name: "MMMMM", birth: "02/02/0002"},
                     {idPerson:"333333", name: "HHHHH", birth: "03/03/0003"}];

  constructor( ) {
    this.idPerson = 0;
    this.statusSearch = true;
  }

  ngOnInit(): void {
  }

  searchPersonFamily(): void {
    this.statusSearch = !this.statusSearch;
  }

}
