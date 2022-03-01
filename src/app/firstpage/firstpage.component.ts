import { Component, OnInit } from '@angular/core';
import { Menu } from '../interfaces/menu';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.css']
})
export class FirstpageComponent{

  language: boolean = true;

  menu: Menu = {
    home: 'Overall',
    education: 'Education',
    work: 'Work Experience',
    skills: 'Skills',
    projects: 'Projects'
  };

changelanguage(){
this.language=!this.language;

if (this.language===true){
  this.menu.home="O mnie";
  this.menu.education="Edukacja";
  this.menu.work="Doświadczenie zawodowe";
  this.menu.skills="Umiejętności";
  this.menu.projects="Projekty";
}
else{
  this.menu.home="Overall";
  this.menu.education="Education";
  this.menu.work="Work Experience";
  this.menu.skills="Skills";
  this.menu.projects="Projects";

}
}

}
