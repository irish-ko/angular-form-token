import { Injectable } from '@angular/core';

export interface Draft {
    companySelect: string;
    numberToken: number;
    blockchain: string;
    supply: boolean;
    symbolName: string;
    tokenName: string;
}

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

  private company:string[] = ['My Company', 'Company#A', 'Company#B'];
  private token:Draft = emplyDraft();

  get userCompany():string[]{
    return this.company;
  }

  set setToken(newToken:Draft){
      this.token = newToken;
  }

  get getToken():Draft{
      return this.token;
  }

  static emplyDraft():Draft{
    return {
        companySelect: "0",
        numberToken: NaN,
        blockchain: "Enthereum",
        supply: true,
        symbolName: "",
        tokenName: ""
    }
  }
}


export const emplyDraft = StoreService.emplyDraft;
