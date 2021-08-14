import { Component, OnInit } from '@angular/core';
import { Comportamiento } from './comportamientos.model';
import { Competencia } from './competencias.model';

@Component({
  selector: 'app-competencias',
  templateUrl: './competencias.component.html',
  styleUrls: ['./competencias.component.css']
})
export class CompetenciasComponent implements OnInit {
  competencias : Competencia[] = [];
  comportamientos : Comportamiento[]  = [];
  descripcionComportamiento = "";
  porcentajePeso = 0;
  siExisten: boolean = true;
  nombre = "";
  descripcionCompetencia = "";
  
  agregarCompetencia(){
    try {
      let competencia = new Competencia(
        this.competencias.length + 1,
        this.nombre,
        this.descripcionCompetencia, []
      )
      this.competencias.push(competencia);
      this.siExisten = false
    } catch (e) {
      console.log("An error ocurred on Agregar iTEM =>", e)
    }
  }

  agregarComportamiento(id: number){
    try {
      if(this.nombre != "" && this.porcentajePeso != 1){
        let comportamiento = new Comportamiento(
          this.nombre, 
          this.porcentajePeso,
          id);
          this.competencias[id].comportamientos.push(comportamiento);
          this.siExisten = false;
      }
      return;
    }catch(e){
        console.log("An error ocurred on Agregar iTEM =>", e
      )
    }
  }

  borrarCompetencias(){
    let arr = this.competencias;
    let removed = arr.splice(0, this.competencias.length)
  }

  ngOnInit(): void {
  }

}
