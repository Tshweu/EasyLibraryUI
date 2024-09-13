import { Component } from '@angular/core';
import { BookFormComponent } from "../../../components/forms/book-form/book-form.component";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { BookService } from '../../../../services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-book',
  standalone: true,
  imports: [
    BookFormComponent,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './create-book.component.html',
  styleUrl: './create-book.component.scss'
})
export class CreateBookComponent {
  book_form: FormGroup;
  loading: boolean = false;

  constructor(private fb: FormBuilder,private book_service: BookService,private router: Router){
    this.book_form = this.fb.group({
      title: ['',Validators.required],
      author: ['',Validators.required],
      publisher: ['',Validators.required],
      publication_year: [0,Validators.required],
      isbn: ['',Validators.required],
      status: ['Available',Validators.required],
      condition: ['New',Validators.required]
    })
  }

  submit(){
    this.loading = true;
    console.log(this.book_form.value);
    this.book_service.createBook(this.book_form.value).subscribe({
      next: (res)=>{
        this.loading = false;
        this.router.navigateByUrl('/views/books/manage');
      },
      error: (err)=>{
        this.loading = false;
        //error message
      }
    })
  }
}
