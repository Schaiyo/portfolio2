import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact: any[];

  constructor(private backendService: BackendService) { 
    this.contact = [];
  }

  ngOnInit(): void {
    this.contact = this.backendService.getContact();
  }

}
