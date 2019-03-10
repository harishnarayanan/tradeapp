import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  appForm: FormGroup;
  title = 'Trade App';
  constructor( private fb: FormBuilder) {

  }

  ngOnInit() {
    this.appForm = this.fb.group({
      sellOne: ['',[Validators.required]]
    });
  }
  
}
