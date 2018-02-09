import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { ExportService } from '../../services/export.service';


@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.scss']
})
export class ExportComponent implements OnInit {

  // @ViewChild(DatatableComponent) table: DatatableComponent;

  defaultColumns = [
    {
        'name': 'Task Barcode',
        'prop': 'taskBarcode',
        'visible': true
    },
    {
        'name': 'Task Name',
        'prop': 'taskName',
        'visible': true
    },
    {
        'name': 'Skills',
        'prop': 'taskSkill',
        'visible': true
    }
  ];

  columns = [
    { prop: 'taskBarcode', name: 'Task Barcode' },
    { prop: 'taskName', name: 'Task Name' },
    { prop: 'taskSkill', name: 'Skills' }
  ];

  rows = [
    { 'taskBarcode': 'Larry', 'taskName': 'Male', 'taskSkill': 'Cisco' },
    { 'taskBarcode': 'Lauren', 'taskName': 'Female', 'taskSkill': 'HP' }
  ];


  constructor(
    private exportService: ExportService
  ) { }

  ngOnInit() {
  }

  /**
   * Helper Method -
   */
  exportCSV() {
    console.log('this.tableColumns', this.defaultColumns, ' , this.rows : ', this.rows);
    const csvData = this.exportService.exportToCSV(this.defaultColumns, this.rows);
    console.log('csvData : ', csvData);
    this.exportService.downloadCSVFile(csvData, 'ScanTask-Report');
  }

}
