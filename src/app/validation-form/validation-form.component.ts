import { Component, OnInit } from '@angular/core';
import {StoreService} from "../store.service";

@Component({
  selector: 'app-validation-form',
  templateUrl: './validation-form.component.html',
  styleUrls: ['./validation-form.component.scss']
})
export class ValidationFormComponent implements OnInit {

  constructor(private store: StoreService) { }

  userCompany:string[] = [];

  rormData = {};

  ngOnInit(): void {
    this.getNameUserCompany();
  }

  getNameUserCompany(){
    this.userCompany = this.store.userCompany;
  }

    onSubmit(f:any){
      console.log(f.value);
    }



}
