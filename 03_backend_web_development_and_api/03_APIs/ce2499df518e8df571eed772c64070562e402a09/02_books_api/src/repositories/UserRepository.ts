import fetch, { Body } from "node-fetch";
import { Comment } from "../@types/comment";
import { User } from "../@types/user";

class UserRepository {
  baseUrl = process.env.BASE_URL;

  getAll(): Promise<string[]> {
    return fetch(`${this.baseUrl}/users`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((authors) => {
        return authors;
      });
  }
  getOne(id: number): Promise<string[]> {
    return fetch(`${this.baseUrl}/users/${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((author) => {
        return author;
      });
  }

  getUserComments(id: number): Promise<Comment[]> {
    return fetch(`${this.baseUrl}/users/${id}/comments`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((comment) => {
        return comment;
      });
  }

  create(params: Record<string, unknown>): Promise<User> {
    return fetch(`${this.baseUrl}${params}`, {
      method: "POST",
      body: JSON.stringify(Body),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((user) => {
        return user;
      });
  }
}
// Leave the line below for tests to work
export { UserRepository };
