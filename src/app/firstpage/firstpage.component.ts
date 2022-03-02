import { Component, OnInit } from '@angular/core';
import { Menu } from '../interfaces/menu';
import { positions } from '../interfaces/positions';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.css']
})
export class FirstpageComponent{
  menu: Menu = {
    home: 'Overall',
    education: 'Education',
    work: 'Work Experience',
    skills: 'Skills',
    projects: 'Projects'
  };

  education1: positions = {
    title: 'Secondary School in Kwidzyn (09.2014 - 06.2017)',
    first: 'Major: Mathematics',
    second: 'Educational level: Secondary'
  };

  education2: positions = {
    title: 'Gdańsk University of Technology (10.2017 - 02.2021)',
    first: 'Major: Electronics and Telecommunications',
    second: 'Educational level: Engineer'
  };
  education3: positions = {
    title: 'University of Gdańsk (10.2021 - present)',
    first: 'Major: Mathematics',
    second: 'Educational level: Master'
  };
  work1: positions = {
    title: 'Junior Frontend Developer (11.2021 – present)',
    first: 'Comarch SA Gdańsk',
    second: 'Educational level: Master'
  };

  changepolish(){
    this.menu.home="O mnie";
    this.menu.education="Edukacja";
    this.menu.work="Doświadczenie";
    this.menu.skills="Umiejętności";
    this.menu.projects="Projekty";
    this.education1.title="II Liceum Ogólnokształcące w Kwidzynie (09.2014 – 06.2017)";
    this.education1.first="Kierunek: Matematyka";
    this.education1.second="Poziom wykształcenia: średnie"
    this.education2.title="Politechnika Gdańska (10.2017 – 02.2021)";
    this.education2.first="Kierunek: Elektronika i Telekomunikacja";
    this.education2.second="Poziom wykształcenia: inżynier";
    this.education3.title="Uniwersytet Gdański (10.2021 – obecnie)";
    this.education3.first="Kierunek: Informatyka";
    this.education3.second="Poziom wykształcenia: Magister";
    this.work1.title="Junior Frontend Developer (11.2021 – obecnie)";
    this.work1.first="Comarch SA Gdańsk";
    this.work1.second="Programista frontend, praca przy aplikacjach ZUS. Technologie: angular, typescript, javascript.";
  }
  changeenglish(){
    this.menu.home="Overall";
    this.menu.education="Education";
    this.menu.work="Work Experience";
    this.menu.skills="Skills";
    this.menu.projects="Projects";
    this.education1.title="Secondary School in Kwidzyn (09.2014 - 06.2017)";
    this.education1.first="Major: Mathematics";
    this.education1.second="Educational level: secondary"
    this.education2.title="Gdańsk University of Technology (10.2017 - 02.2021)";
    this.education2.first="Major: Electronics and Telecommunications";
    this.education2.second="Educational level: engineer";
    this.education3.title="University of Gdańsk (10.2021 - present)";
    this.education3.first="Major: Informatics";
    this.education3.second="Educational level: master";
    this.work1.title="Junior Frontend Developer (11.2021 – present)";
    this.work1.first="Comarch SA Gdańsk";
    this.work1.second="Frontend developer, support for ZUS applications. Technologies: angular, typescript, javascript.";
  }

}

