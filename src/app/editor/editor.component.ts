import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditorComponent implements OnInit {
  text: string;

  editorForm: FormGroup;

  editorStyles = {
    height: '300px',
  };

  editorConfig = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'], 
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      [{ 'align': [] }],
      [{ 'font': [] }],
      [{ 'script': 'sub'}, { 'script': 'super' }],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'size': ['10px','12px','14px','16px','18px','22px', '24px','26px','30px', '36px'] }], 
      ['clean'] 
    ]

  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.editorForm = this.fb.group({
      'editor': []
    })
  }


  onSubmit() {
    console.log(this.editorForm.value);
  }


  onContent(e){
    console.log(e)
  }

}
