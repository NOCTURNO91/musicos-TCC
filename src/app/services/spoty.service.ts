import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotyService {

  uri:string="https://api.spotify.com/v1/artists/6FWYYq5R9PC3eDDV1mR7I5/top-tracks?market=US";

  token:string="Bearer BQCtkXyoEI400S5CzLV8NmswwBcIN4InyzVO15fr72JwsW5WU5sPxShEFnZNFFfyDVzRJyRs4iN6WtCq3YmfXFRsO_jnPI4R2GFjirbpOHVUe0cc7KI6eb8liYY09Voac0LW2MBUgjczHHWajApamu5JVT82IQNJNieqr0hiKMmberia4jWZerctfgZMdvj0qPo";

  constructor(public peticion: HttpClient) {
    console.log("Arrancando el servicio")
  }

  public traerCanciones():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: this.token
      })
    };

    return this.peticion.get(this.uri,httpOptions);

  }
}
