import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input()
  name: String = "แสงชัย แซ่เบ๊";

  constructor() { }

  ngOnInit(): void {
  }

}
