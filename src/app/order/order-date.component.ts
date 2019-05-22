import { Component, OnInit } from '@angular/core';
import { DateAdapter, NativeDateAdapter } from '@angular/material';
import { FormBuilder, Validators } from '@angular/forms';

export class MyDateAdapter extends NativeDateAdapter {
  getDateNames(): string[] {
    const dateNames: string[] = [];
    for (let i = 0; i < 31; i++) {
      dateNames[i] = String(i + 1);
    }
    return dateNames;
  }
}

@Component({
  selector: 'order-date',
  templateUrl: './order-date.component.html',
  styleUrls: ['./order-date.component.css'],
  providers: [
    {provide: DateAdapter, useClass: MyDateAdapter}
  ]
})
export class OrderDateComponent implements OnInit {
  　orderDate = this.fb.group({
    day:['', Validators.required],
    yday:['', ''],
    sday:['', ''],
    uday:['', ''],
    nday:['', '']
  });
  constructor(dateAdapter: DateAdapter<NativeDateAdapter>,private fb: FormBuilder) {
    dateAdapter.setLocale('jp-JA');
   }

  ngOnInit() {
  }

}