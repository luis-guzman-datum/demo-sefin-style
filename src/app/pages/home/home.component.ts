import { Component, OnInit } from '@angular/core';
import {
  ListaDeSistemasConAcceso,
  SistemaModel,
} from 'src/app/models/sistemas';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  
  listaSistemas: SistemaModel[] = ListaDeSistemasConAcceso;

  constructor() {}

  ngOnInit(): void {}
}
