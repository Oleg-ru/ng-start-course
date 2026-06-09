import { Component, signal } from '@angular/core';
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
  public selectedPost?: PostItem;
  public showModal = false;
  public isLoading = signal(false);  // ← signal для загрузки
  constructor(private postService: PostService) {}

  ngOnInit() {
    this.post$ = this.postService.getPosts()
  }

  showDetails(id: number) {
    console.log('Click on post:', id);
    this.showModal = true;
    this.isLoading.set(true);  // ← начинаем загрузку
    this.postService.getPost(id).subscribe({
      next: post => {
        console.log('Post loaded:', post);
        this.selectedPost = post;
        this.isLoading.set(false);  // ← загрузка завершена
      },
      error: err => {
        console.error('Error loading post:', err);
        this.isLoading.set(false);  // ← ошибка
      }
    })
  }
}
