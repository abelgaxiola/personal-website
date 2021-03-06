import { BlogService } from './../shared/blog-service';
import { Component, OnInit } from '@angular/core';
import { Blog } from './../shared/blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html'
})
export class BlogComponent implements OnInit {
  errorMessage: string;
  blogs: Blog[];

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogService.getBlogs()
      .subscribe(blogs => this.blogs = blogs,
      error => this.errorMessage = <any>error);
  }

}
