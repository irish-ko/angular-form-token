import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

  private company:string[] = ['My Company', 'Company#A', 'Company#B'];

  get userCompany():string[]{
    return this.company;
  }
}
