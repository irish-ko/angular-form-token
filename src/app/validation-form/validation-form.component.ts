import {
    AfterViewInit,
    Component,
    ElementRef,
    Input,
    OnInit,
    Output,
    ViewChild,
    EventEmitter
} from '@angular/core';
import {Draft, emplyDraft, StoreService} from "../store.service";
import {fromEvent} from "rxjs";
import {debounceTime, distinctUntilChanged, map, tap} from "rxjs/operators";

@Component({
  selector: 'app-validation-form',
  templateUrl: './validation-form.component.html',
  styleUrls: ['./validation-form.component.scss']
})
export class ValidationFormComponent implements OnInit, AfterViewInit {

  constructor(private store: StoreService) { }

    @Output() showToken = new EventEmitter();
    @ViewChild('tokenName') tokenName!: ElementRef;
    @ViewChild('numberToken') numberToken!: ElementRef;
    @ViewChild('symbolName') symbolName!: ElementRef;

  userCompany:string[] = [];
  formData:Draft = emplyDraft();
  validInput: any = {
      buttonDisable: true,
      numberToken:false,
      symbolName:false,
      tokenName: false
  };

    addErrorInput:any = {
        numberToken:false,
        symbolName:false,
        tokenName: false
    };

    ngOnInit(): void {
      this.getNameUserCompany();
    }

    ngAfterViewInit(){
      this.makeSubscribe();
    }

    getNameUserCompany():void{
        this.userCompany = this.store.userCompany;
    }

    makeSubscribe():void{
        fromEvent(this.symbolName.nativeElement, 'input')
            .pipe(
                tap(()=> {
                    this.addErrorInput.symbolName = false;
                    this.validInput.symbolName = false;
                    this.validInput.buttonDisable = true
                }),
                map((e:any) => e.target.value),
                debounceTime(500),
            ).subscribe( (res:string)=>{
            this.validSymbolName(res);
        });

        fromEvent(this.numberToken.nativeElement, 'input')
            .pipe(
                tap(()=> {
                    this.addErrorInput.numberToken = false;
                    this.validInput.numberToken = false;
                    this.validInput.buttonDisable = true
                }),
                map((e:any) => e.target.value),
                debounceTime(500),
            ).subscribe( (res:number)=>{
            this.validNumberToken(res);
        });

        fromEvent(this.tokenName.nativeElement, 'input')
            .pipe(
                tap(()=> {
                    this.addErrorInput.tokenName = false;
                    this.validInput.tokenName = false;
                    this.validInput.buttonDisable = true}),
                map((e:any) => e.target.value),
                debounceTime(500),
            ).subscribe( (res:string)=>{
            this.validTokenName(res);
        });
    }

    validSymbolName(val:string):void{
        if(val.length > 2 && val.length < 7){
            this.validInput.symbolName = true;
            this.addErrorInput.symbolName = false;
            this.validInput.buttonDisable = this.validAllField();
        }
        else {
            this.addErrorInput.symbolName = true;
            this.validInput.symbolName = false;
        }
    }

    validTokenName(val:string):void{
      if(val.length > 5 && val.length < 25){
          this.validInput.tokenName = true;
          this.addErrorInput.tokenName = false;
          this.validInput.buttonDisable = this.validAllField();
      }
      else {
        this.addErrorInput.tokenName = true;
        this.validInput.tokenName = false;
      }
    }

    validNumberToken(val:number):void{
        if(val > 0 && val < 100000000){
            this.validInput.numberToken = true;
            this.addErrorInput.numberToken = false;
            this.validInput.buttonDisable = this.validAllField();
        }
        else {
            this.addErrorInput.numberToken = true;
            this.validInput.numberToken = false;
        }
    }

    validAllField():boolean{
      return !this.validInput.numberToken || !this.validInput.tokenName || !this.validInput.symbolName;
    }

    onSubmit():void{

        this.store.setToken = this.chengeTokenData();
        this.showToken.emit();
    }

    chengeTokenData():Draft{
        const token:Draft = {
            ...this.formData,
            companySelect: this.userCompany[+this.formData.companySelect],
            symbolName: this.formData.symbolName.toUpperCase(),
        };

        return token;
    }

}
