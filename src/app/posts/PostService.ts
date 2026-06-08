import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PostItem} from './PostItem';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private _httpClient: HttpClient) {}

  getPosts(): Observable<PostItem[]> {
    return this._httpClient.get<PostItem[]>('https://jsonplaceholder.typicode.com/posts')
  }

}
