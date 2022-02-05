import { Component, OnInit } from '@angular/core';
import {Draft, emplyDraft, StoreService} from "../store.service";

@Component({
  selector: 'app-show-draft',
  templateUrl: './show-draft.component.html',
  styleUrls: ['./show-draft.component.scss']
})
export class ShowDraftComponent implements OnInit {

  constructor(private store: StoreService) { }

  token:Draft = this.store.getToken;

  ngOnInit(): void {
  }

}
