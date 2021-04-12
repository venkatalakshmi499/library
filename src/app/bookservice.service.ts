import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Books} from '../app/books';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  constructor(private http: HttpClient) { }

  url: string="http://localhost:3000/books";
   getBooks(){
     return this.http.get("http://localhost:3000/books");
   }
}
