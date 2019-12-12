import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {InfoPagina} from '../interfaces/info-pagina.interfaces';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info: InfoPagina = {};
  cargada = false;
  equipo: any  = [];

  constructor(public http: HttpClient) {
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo() {
    // Leer el JSON
    this.http.get('assets/data/data-pagina.json')
      .subscribe((res: InfoPagina) => {
        this.cargada = true;
        this.info = res;
      });
  }
  private cargarEquipo() {
    this.http.get('https://angular-html-9f790.firebaseio.com/equipo.json')
      .subscribe((res: any[]) => {
        this.equipo = res;
        // console.log(res);
      });
  }

}
