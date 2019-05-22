import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BaseForm } from "./base-form";
import { DateAdapter, NativeDateAdapter } from '@angular/material';
import { AbstractControl, FormBuilder, FormControl, Validators } from '@angular/forms';

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
    { provide: DateAdapter, useClass: MyDateAdapter }
  ]
})
export class OrderDateComponent extends BaseForm implements OnInit {
  // 親コンポーネントにこのフォームコンポーネントをemitするための@Output()
  @Output() formReady = new EventEmitter<AbstractControl>();
  // フォームの定義 
  orderDate: AbstractControl = this.fb.group({
    day: ['', Validators.required],
    yday: ['', ''],
    sday: ['', ''],
    uday: ['', ''],
    nday: ['', '']
  });
  constructor(dateAdapter: DateAdapter<NativeDateAdapter>, private fb: FormBuilder) {
    super();
    dateAdapter.setLocale('jp-JA');
  }

  ngOnInit() {
    this.formReady.emit(this.orderDate);
  }


}