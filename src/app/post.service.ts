import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts() {
   return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
  savePost(post) {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', post);
  }
  update( post) {
    return this.http.put('https://jsonplaceholder.typicode.com/posts/' + post.id, post);
  }
  removePoste( id) {
    return this.http.delete('https://jsonplaceholder.typicode.com/posts/' + id);
  }
}
