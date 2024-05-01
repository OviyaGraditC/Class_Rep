import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-scan-page',
  templateUrl: './scan-page.component.html',
  styleUrls: ['./scan-page.component.scss']
})
export class ScanPageComponent implements OnInit {
constructor(){}

  scanpage: any;

  ngOnInit(): void
  {
    this.scanpage = new FormGroup({
      classroom: new FormControl('')
    });
  }

  onformsubmit()
{

}
}
