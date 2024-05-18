import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule,  Validators } from '@angular/forms';

@Component({
  selector: 'make-quiz',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  templateUrl: './make-quiz.component.html',
  styleUrl: './make-quiz.component.css'
})
export class MakeQuizComponent {
  //private questions: []= []

public questionsForm: FormGroup = this.fb.group({
  question: ['', [Validators.required], [] ],
  ans1:['', [Validators.required], [] ],
  ans2:['', [Validators.required], [] ],
  ans3:['',[], [] ],
  ans4:['',[], [] ],
})

constructor (private fb: FormBuilder){}

onSave(): void{
  console.log(this.questionsForm.value);

}

}


