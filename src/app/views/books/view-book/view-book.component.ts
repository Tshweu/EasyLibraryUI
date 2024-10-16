import { Component } from '@angular/core';
import { BookService } from '../../../../services/book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-book',
  standalone: true,
  imports: [],
  templateUrl: './view-book.component.html',
  styleUrl: './view-book.component.scss'
})
export class ViewBookComponent {
  id : string;
  constructor(private book_service: BookService,private route: ActivatedRoute){
    this.id = route.snapshot.params['id'];
  }



}
