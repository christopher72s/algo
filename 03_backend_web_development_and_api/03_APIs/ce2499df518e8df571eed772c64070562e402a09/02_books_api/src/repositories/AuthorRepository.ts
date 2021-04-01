import fetch, { Response } from "node-fetch";
import { Author } from "../@types/author";
import { Book } from "../@types/book";

class AuthorRepository {
  baseUrl = process.env.BASE_URL;

  getAll(): Promise<Author[]> {
    return fetch(`${this.baseUrl}/authors`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((authors) => {
        return authors;
      });
  }
  getOne(id: number): Promise<Author[]> {
    return fetch(`${this.baseUrl}/authors/${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((author) => {
        return author;
      });
  }

  getAuthorBooks(id: number): Promise<Book[]> {
    return fetch(`${this.baseUrl}/authors/${id}/books`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((authorbooks) => {
        return authorbooks;
      });
  }
  searchByName(term: string): Promise<Author[]> {
    return fetch(`${this.baseUrl}/authors?q=${term}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((searchauthorbooks) => {
        return searchauthorbooks;
      });
  }
}
// Leave the line below for tests to work
export { AuthorRepository };
