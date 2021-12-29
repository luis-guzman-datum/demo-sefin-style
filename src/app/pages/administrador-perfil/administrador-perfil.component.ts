import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administrador-perfil',
  templateUrl: './administrador-perfil.component.html',
  styleUrls: ['./administrador-perfil.component.scss']
})
export class AdministradorPerfilComponent implements OnInit {

  //variable para guardar imagen
  temporalImage ='assets/images/alvin.png';

  constructor() { }

  ngOnInit(): void {
  }

  //metodo utilizado para hacer la carga de imagenes de usarios
  cargarImagen(event:any) {
    for (let d of event.target.files) {
      let file = d;
      console.log(file.name);
      let reader:any = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.temporalImage = reader.result.toString();
      };
    }
  }

}
