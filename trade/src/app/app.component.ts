import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  appForm: FormGroup;
  title = 'trade';
  constructor( private fb: FormBuilder) {

  }

  ngOnInit() {
    this.appForm = this.fb.group({
      sellOne: ['',[Validators.required]]
    });
  }
  showControl() {
    console.log(this.appForm);
  }
}
