import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsultaapiService } from 'src/app/services/consultaapi.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  characters: any = null;
  id: any = null;
  constructor(
    private _route: ActivatedRoute,
    private characterService: ConsultaapiService
  ) {}
  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
    this.characterService
      .getId(this.id)
      .subscribe(result => {this.characters = result
         console.log(result);});


  }
}
