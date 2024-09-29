import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationRestService {
  

  // Endpoint del ambiente de prueba.
  endpoint = 'https://apiasambleas.grupogift.com/app-preregistro/';
  endpoint2 = 'https://apiasambleas.grupogift.com/app-management/';
  endpoint3 = 'https://apiasambleas.grupogift.com/gestor-v2/';
  endpoint4 = 'https://apiasambleas.grupogift.com/preregistro-test/';
  endpointSocket = 'wss://socket.tetranscribo.com:3000';

  //endpoints de produccion
  // endpoint = 'https://apiasambleas.grupoempresarialnexos.com/app-preregistro/';
  // endpoint2 = 'https://apiasambleas.grupoempresarialnexos.com/app-management/';
  // endpoint3 = 'https://apiasambleas.grupoempresarialnexos.com/gestor-v2/';
  // endpoint4 = 'https://apiasambleas.grupoempresarialnexos.com/preregistro-v2/';
  // endpointSocket = 'wss://socket.grupoempresarialnexos.com:3000';

  // // // endpoint4 = 'https://apiasambleas.grupoempresarialnexos.com/preregistro-test/';

  //Key
  key = 'GiUBniR9UtmfKDaeOc9tXKt16lk=';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor() { }
}