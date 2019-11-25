import { Component, OnInit, AfterViewInit } from '@angular/core';


declare var $ : any;
declare var md : any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $(function() {
      md.initDashboardPageCharts();
    });
  }

}
