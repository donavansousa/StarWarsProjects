//Importações Necessárias
import { Component, OnInit,ViewChild } from '@angular/core';
import { FormControl } from "@angular/forms";
import {ResultService} from '../Services/result.service';
import {IResult} from '../Models/result.interface';
import {MatTableDataSource,MatPaginator } from '@angular/material';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

//Componentes deste Arquivo
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
//Classe
export class ResultComponent implements OnInit  {
  //Atributos
  result : IResult[];
  displayedColumns = ['Person', 'Planet'];
  dataSource = new MatTableDataSource<IResult>();
  myControl = new FormControl();
  options: IResult[];
  filteredOptions: Observable<IResult[]>;
  positionFilter = new FormControl();
  nameFilter = new FormControl();
  filteredValues = { Specie:'', Planet:'', topFilter: false};

  //Construtor
  constructor(private resultService:ResultService) {
   }

  //Tarefas Adicionais de Inicialização
  ngOnInit () {
    //Ler Token 
   this.returnToken();
    
   //Inicializa Valor Filter
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        map(value => this._filter(value))
      );
  }

  //Método Retorna Lista de Personagens,Planetas e Espécies
  private async ListResults(token){
    this.resultService.getResults(token).subscribe(
      data=> {this.dataSource= new MatTableDataSource(data)
              this.options= data.filter((thing, i, arr) =>{return arr.indexOf(arr.find(t => t.Planet === thing.Planet && t.Specie===thing.Specie)) === i;})
             this.result= data
             },
     error => alert(error),
     ()=>console.log(this.options)
   );
}

  //Método Retorna Resultado TypeHead
  private _filter(value: string): IResult[] {
    var filterValue = value.toLowerCase();
    filterValue=filterValue.replace(' (','-').replace(')','');
    var arrayFilter=filterValue.split('-');
    return this.options.filter(option => {return option.Specie.toLowerCase().startsWith(arrayFilter[0]) });
  }

  //Método Retorna lista de Acordo com o TypeHead
  selectedOption(filterValue: string) {
    filterValue=filterValue.replace(' (','-').replace(')','');
    var arrayFilter=filterValue.split('-');
    this.dataSource=new MatTableDataSource (this.result);
    this.dataSource.filter=arrayFilter[0].trim().toLowerCase();
    this.dataSource.data=this.dataSource.filteredData.filter(value=>{return value.Planet.trim().toLowerCase()===arrayFilter[1].trim().toLowerCase()});
  }
  //Método Verifica Valor TypeHead
  inputChanged(value){
    if(value===""){
      this.dataSource=new MatTableDataSource (this.result);
    }
  }
  //Método Ler Token
  returnToken(){
    this.resultService.getToken().subscribe(
      data=> this.ListResults(data.access_token),
      error => alert(error)
    );
    }
}
