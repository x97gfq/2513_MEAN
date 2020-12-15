import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  books?: Book[];
  currentBook?: Book;
  currentIndex = -1;
  title = '';
  showForm = false;


  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.retrieveBooks();
  }

  addNewBook(): void {
    this.currentBook = new Book();
    this.showForm = true;
  }

  cancelBook(): void {
    this.currentBook = new Book();
    this.showForm = false;
  }

  deleteBook(): void {
    this.bookService.delete(this.currentBook!._id)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        },
        () => {
          this.refreshList()
          this.currentBook = new Book();
          this.showForm = false;
        });
  }

  saveBook(): void {
    if (this.currentBook?._id == '') {

      this.bookService.create(this.currentBook)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        },
        () => this.refreshList());

    } else {

      this.bookService.update(this.currentBook!._id, this.currentBook)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        },
        () => this.refreshList());

    }
    this.showForm = false;
  }

  retrieveBooks(): void {
    this.bookService.getAll()
      .subscribe(
        data => {
          this.books = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveBooks();
    this.currentBook = new Book();
    this.currentIndex = -1;
  }

  setActiveBook(book: Book, index: number): void {
    this.currentBook = book;
    this.currentIndex = index;
    this.showForm = true;
  }
}
