import { Component, OnDestroy } from '@angular/core';
import { BookService } from '../../service/book.service';
import { EMPTY, Subscription, catchError, debounceTime, distinctUntilChanged, filter, map, of, switchMap, tap, throwError } from 'rxjs';
import { Book, BooksResult, Item } from '../../models/interfaces';
import { BookVolumeInfo } from '../../models/bookVolumeInfo';
import { FormControl } from '@angular/forms';

const DBTIME = 300;

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})

export class ListaLivrosComponent implements OnDestroy {

  searchField = new FormControl();
  subscription: Subscription;
  book: Book;
  errorMessage = '';
  totalItems = 0;

  constructor(private booksService: BookService) {}

  results$ = this.searchField.valueChanges.pipe(
    debounceTime(DBTIME),
    filter((inputValue) => inputValue.length >= 3),
    distinctUntilChanged(),
    switchMap((result) => this.booksService.search(result)),
    tap(() => console.log('Chamada ao servidor')),
    map((response) => response.items ?? []),
    map(items => this.receivedBooksToBooks(items))
  )

  private receivedBooksToBooks(items: Item[]): BookVolumeInfo[] {
    return items.map((item) => new BookVolumeInfo(item));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}



