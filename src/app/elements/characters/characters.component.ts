import { Component, OnInit } from '@angular/core';
import { ConsultaapiService } from '../../services/consultaapi.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  //serializamos a un array ya que lo que obtenemos es un objeto
  characters: any = [];
  constructor(private consulta: ConsultaapiService) {}
  ngOnInit() {
    for (let i = 1; i <=8; i++) {
      this.consulta.retornar().subscribe((result) => {
        this.characters.push(result);
      });
    }
    console.log(this.characters);
  }
}
