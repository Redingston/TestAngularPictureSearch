import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { IFormField } from 'src/Model/IFormField';
import { validationHelper } from 'src/utils/helpers/validation-helper';
import { requiredValidator } from 'src/utils/validators/required-validator';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() searchString = new EventEmitter<string>();
  @Output() per_page = new EventEmitter<number>();

  form: FormGroup;
  numbers: number[] = [5,10,20,50,100];

  fields: IFormField[] = [
    {
      id: "work-info-field",
      type: "text",
      label: "search",
      placeholder: "example: yellow flower ",
      name: "search",
      errorMsg: null
    }];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      "count": [null],
      "search":  [null, requiredValidator("search is required")]
    });

    this.form.valueChanges.subscribe(value =>{
      if(value.count!=null)
      {
        this.per_page.emit(value.count);
      }
    });
    this.form.valueChanges.subscribe(value =>{
      const thisFormValidationResponse = validationHelper(this.form.controls, this.fields);
      this.fields = thisFormValidationResponse.fields;
      if (thisFormValidationResponse.isValid ) {
        this.searchString.emit(value.search);
      }
    });
  }
  
}
