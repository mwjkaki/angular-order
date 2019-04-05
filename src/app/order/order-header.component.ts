import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'order-header',
  templateUrl: './order-header.component.html',
  styleUrls: ['./order-header.component.css']
})
export class OrderHeaderComponent implements OnInit {
　orderHead = this.fb.group({
    denno: null,
    mcode:['', Validators.required],
    scode:['', Validators.required],　 
    ncode:['', Validators.required],
    nadr:['', Validators.required],

  });
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
  }

}