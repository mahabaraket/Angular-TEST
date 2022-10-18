import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-who-one',
  templateUrl: './who-one.component.html',
  styleUrls: ['./who-one.component.css']
})
export class WhoOneComponent implements OnInit {

  constructor(private metaService: Meta ,private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("Sandbox | Smart Conseil ")
    this.metaService.updateTag({
      property: "og:title",
      content:
        "Sandbox | Samrt conseil",
    });
    this.metaService.updateTag({
      name: "keywords",
      content: "sanbox, samrt conseil",
    });
    this.metaService.updateTag({
      name: "description",
      content:
        "Test dévelopeur web Angular",
    });
  }

}
