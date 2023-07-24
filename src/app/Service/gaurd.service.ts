import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GaurdService {

  constructor() { }

  getToken(){
    return localStorage.getItem('access')
  }
}
