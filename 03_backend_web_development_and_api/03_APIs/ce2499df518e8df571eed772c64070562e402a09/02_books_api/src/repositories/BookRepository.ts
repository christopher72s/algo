import fetch from "node-fetch";
import { Book } from "../@types/book";
import { Comment } from "../@types/comment";

class BookRepository {
  baseUrl = process.env.BASE_URL;

  getAll(): Promise<string[]> {
    return fetch(`${this.baseUrl}/books`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((books) => {
        return books;
      });
  }
  getOne(id: number): Promise<Book[]> {
    return fetch(`${this.baseUrl}/books/${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((Book) => {
        return Book;
      });
  }

  getBookComments(id: number): Promise<Comment[]> {
    return fetch(`${this.baseUrl}/books/${id}/comments`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((comment) => {
        return comment;
      });
  }

  searchByTitle(term: string): Promise<string[]> {
    return fetch(`${this.baseUrl}/books?q=${term}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((searchauthorbooks) => {
        return searchauthorbooks;
      });
  }
}
// Leave the line below for tests to work
export { BookRepository };
