import { Component, OnInit } from '@angular/core';

crew: string[] = ["Jessica Watkins", "Raja Chari", "Jasmin Moghbeli"];

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
