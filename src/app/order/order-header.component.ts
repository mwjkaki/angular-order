import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'order-header',
  templateUrl: './order-header.component.html',
  styleUrls: ['./order-header.component.css']
})
export class OrderHeaderComponent implements OnInit {
　orderHead = this.fb.group({
    denno: null,
    tcode:['', Validators.required],
    skbn:['', Validators.required],
    mcode:['', Validators.required],
    scode:['', Validators.required],　 
    ncode:['', Validators.required],
    nadr:['', Validators.required],
    bikou:['', Validators.required],

  });
  skbnCtrl = new FormControl('', [Validators.required]);
  skubun = [
    {value: '0', viewValue: '出荷売上'},
    {value: '1', viewValue: '売上のみ'},
    {value: '2', viewValue: '出荷のみ'}
  ];
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
  }

}