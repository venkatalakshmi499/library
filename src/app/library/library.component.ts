import { Component, OnInit } from '@angular/core';
import { Books } from '../books';
import { BookserviceService } from '../bookservice.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
books: Books[]=[];

  constructor(public bs: BookserviceService) { }

  ngOnInit(): void {
    this.bs.getBooks().subscribe((response)=>
    {
      this.books=response;
      console.log(response);
    }
    )
  }

}
