import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {InfoPagina} from '../interfaces/info-pagina.interfaces';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info: InfoPagina = {};
  cargada = false;

  constructor(public http: HttpClient) {
    // console.log('Servicio listo');

    // Leer el JSON
    this.http.get('assets/data/data-pagina.json')
      .subscribe( (res: InfoPagina) => {
        this.cargada = true;
        this.info = res;
        console.log(res);
      });
  }
}
