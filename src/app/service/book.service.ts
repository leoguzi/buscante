import { HttpClient,  HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { Book, BooksResult, Item } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private readonly API = 'https://www.googleapis.com/books/v1/volumes'
constructor( private http: HttpClient) { }


public search(query: string): Observable<BooksResult> {
  const params = new HttpParams().append('q', query);
  return this.http.get<BooksResult>(this.API, { params });
};
}
