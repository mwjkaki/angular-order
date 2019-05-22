import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BaseForm } from "./base-form";
import { AbstractControl, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'order-header',
  templateUrl: './order-header.component.html',
  styleUrls: ['./order-header.component.css']
})
export class OrderHeaderComponent extends BaseForm implements OnInit {
  // 親コンポーネントにこのフォームコンポーネントをemitするための@Output()
  @Output() formReady = new EventEmitter<AbstractControl>();
  // フォームの定義  
　orderHead: AbstractControl = this.fb.group({
    denno: null,
    tcode:['', Validators.required],
    skbn:['', Validators.required],
    mcode:['', Validators.required],
    scode:['', Validators.required],　 
    ncode:['', Validators.required],
    nadr:['', Validators.required],
    bikou:['', Validators.required]  
  });
  skubun = [
    {value: '0', viewValue: '出荷売上'},
    {value: '1', viewValue: '売上のみ'},
    {value: '2', viewValue: '出荷のみ'}
  ];
  constructor(private fb: FormBuilder) {
    super();
  }
  ngOnInit() {
    this.formReady.emit(this.orderHead);
  }
}