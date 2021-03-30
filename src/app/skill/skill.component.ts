import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  skill: String[];

  constructor(private backendService: BackendService) { 
    this.skill = [];
  }

  ngOnInit(): void {
    this.skill = this.backendService.getSkill();
  }

}
