import { Component, OnInit } from '@angular/core';
import { CERTIFICATES } from '../certificates_list';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  certificates: String[];

  constructor() {
    this.certificates = CERTIFICATES;
  }

  ngOnInit() {
  }

}
