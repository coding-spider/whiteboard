import { Component, OnInit } from '@angular/core';

// gridstack
import { GridStack, GridStackWidget } from 'gridstack';
import 'gridstack/dist/h5/gridstack-dd-native';

//highcharts
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-dashboard-manager',
  templateUrl: './dashboard-manager.component.html',
  styleUrls: [
    './dashboard-manager.component.css'
  ]
})
export class DashboardManagerComponent implements OnInit {

  private items: GridStackWidget[] = [
    { x: 0, y: 0, w: 9, h: 6, content: `<div>Rohan</div>` },
    { x: 9, y: 0, w: 3, h: 3, content: '1' },
    { x: 9, y: 3, w: 3, h: 3, content: '2' },
  ];
  private grid: GridStack | undefined;

  constructor() {}

  // simple div above doesn't require Angular to run, so init gridstack here
  public ngOnInit() {
    this.initGrid();
    this.initChart();
  }

  // chart logic
  public initChart() {

  }

  // grid logic
  public initGrid() {
    this.grid = GridStack.init({
      cellHeight: 70,
    })
      .load(this.items); // and load our content directly (will create DOM)
  }

  public add() {
    this.grid?.addWidget({w: 3, content: `new content - ${new Date()}`});
  }
  public delete() {
    // this.grid.removeWidget(this.grid.engine.nodes[0].el);
  }
  public change() {
    if (this.grid && this.grid.engine.nodes[0].el) {
      // console.log(this.grid);
      this.grid.update(this.grid.engine.nodes[0].el, {content: `${new Date()}`});
    }
  }
}
