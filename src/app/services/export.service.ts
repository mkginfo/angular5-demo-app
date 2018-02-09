import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class ExportService {

  constructor() { }

  exportToCSV(headers, values): any {
    const exprtcsv: any[] = [];
    (<any[]>JSON.parse(JSON.stringify(values))).forEach(x => {
      const obj = new Object();
      // const frmt = new Format();
      for (let i = 0; i < headers.length; i++) {
        if (headers[i].visible) {
          const transfrmVal = x[headers[i].prop];
          obj['"' + headers[i].name.split(' ').join('_') + '"'] = transfrmVal;
        }
      }
      exprtcsv.push(obj);
    });

    return exprtcsv;
  }

  downloadCSVFile(data: any, exportFileName: string) {
    const csvData = this.convertToCSV(data);
    console.log('convertToCSV : ', csvData);
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });

    if (navigator.msSaveBlob) { // IE 10+
      navigator.msSaveBlob(blob, this.createFileName(exportFileName));
    } else {
      const link = document.createElement('a');
      if (link.download !== undefined) { // feature detection
        // Browsers that support HTML5 download attribute
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', this.createFileName(exportFileName));
        // link.style = "visibility:hidden";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
  }

  convertToCSV(objarray: any) {
    const array = typeof objarray !== 'object' ? JSON.parse(objarray) : objarray;

    let str = '';
    let row = '';

    for (const index of Object.keys(objarray[0])) {
      row += index + ',';
    }

    row = row.slice(0, -1);
    // append Label row with line break
    str += row + '\r\n';

    for (let i = 0; i < array.length; i++) {
      let line = '';
      for (const index of Object.keys(array[i])) {
        if (line !== '') {
          line += ',';
        }
        line += JSON.stringify(array[i][index]);
      }
      str += line + '\r\n';
    }
    return str;
  }

  createFileName(exportFileName: string): string {
    const date = new Date();
    return (exportFileName  + '_' +
      date.toLocaleDateString() + ' ' +
      date.toLocaleTimeString()
      + '.csv');
  }

}
