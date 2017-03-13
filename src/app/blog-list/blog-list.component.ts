import { Component, OnInit } from '@angular/core';
import { Blog } from './../shared/blog';
import { BlogService } from './../shared/blog-service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html'
})
export class BlogListComponent implements OnInit {
  errorMessage: string;
  blogs: Blog[];

  constructor(private blogService: BlogService) {
  }

  ngOnInit(): void {
    this.blogService.getBlogs()
      .subscribe(blogs => this.blogs = blogs,
      error => this.errorMessage = <any>error);
  }

}
