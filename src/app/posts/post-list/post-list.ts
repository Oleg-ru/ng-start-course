import { Component } from '@angular/core';
import {PostService} from '../PostService';

@Component({
  selector: 'app-post-list',
  imports: [],
  templateUrl: './post-list.html',
  styleUrl: './post-list.css',
})
export class PostList {
  constructor(private postService: PostService) {

  }

  ngOnInit() {
    this.postService.getPosts().subscribe(resp => console.log(resp))
  }
}
