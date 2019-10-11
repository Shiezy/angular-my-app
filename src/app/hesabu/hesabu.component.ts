import { Component, OnInit } from '@angular/core';
import {HesabuService} from '../hesabu.service';
import {Form, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-hesabu',
  templateUrl: './hesabu.component.html',
  styleUrls: ['./hesabu.component.css']
})
export class HesabuComponent implements OnInit {

  mathForm;

  constructor(private hesabuService: HesabuService, private formBuilder: FormBuilder) {
    this.mathForm = this.formBuilder.group({
      a: '',
      b: '',
      operation: ''
    });
  }

  ngOnInit() {
  }

  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);

    this.mathForm.reset();
  }
}
