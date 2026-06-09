import { Component } from '@angular/core';
import {PostService} from '../PostService';
import {Observable} from 'rxjs';
import {PostItem} from '../PostItem';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-post-list',
  imports: [
    AsyncPipe
  ],
  templateUrl: './post-list.html',
  styleUrl: './post-list.css',
})
export class PostList {
  public post$?: Observable<PostItem[]>;
  public selectedPost?: Observable<PostItem>;
  public showModal = false;
  constructor(private postService: PostService) {}

  ngOnInit() {
    this.post$ = this.postService.getPosts()
  }

  showDetails(id: number) {
    this.selectedPost = this.postService.getPost(id);
  }
}
