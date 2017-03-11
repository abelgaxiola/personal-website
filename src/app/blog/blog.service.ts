import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { Blog } from './blog';

@Injectable()
export class BlogService {
  private blogsUrl = './app/blog/blogs.json';

  constructor(private http: Http) { }

  getBlogs(): Observable<Blog[]> {
    return this.http.get(this.blogsUrl)
      .map((response: Response) => <Blog[]>response.json())
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

    getBlog(id: number): Observable<Blog> {
        return this.getBlogs()
            .map((blogs: Blog[]) => blogs.find(p => p.Id === id));
    }

  private handleError(error: Response) {
    // ToDo: Log somewhere else (text-file or database)
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
