import { PostService } from './../post.service';

import { Component, OnInit } from '@angular/core';
import { Swal } from 'sweetalert2'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  post = {title: '', body: ''} ;
  showAddform = false;
  newElement = true;
  posts = [] ;

  constructor(private postService: PostService) { }

  ngOnInit() {
     this.listPosts();
  }

  listPosts() {
    this.postService.getPosts().subscribe((res: any ) => this.posts = res);
    console.log( this.posts  );
  }

  showHidForm() {
    this.showAddform = !this.showAddform;
    console.log(this.showAddform);
  }

  savePost() {
    console.log(this.post);
    if ( this.post.title === '' ) {
      alert(' Titre vide ');
    } else {
    this.postService.savePost(this.post).subscribe((res) => {
      this.posts.unshift(res);
      this.post = {title: '', body: ''};
      console.log( res );
    },
    (err) => console.log( err));
  }
}
showUpdate(post){
  this.post = post;
  this.showAddform = true;
  this.newElement = false;
}
updatePoste( post){
  this.postService.update( this.post).subscribe((res) => {
    this.post = {title: '', body: ''};
    this.showAddform = false;
    console.log( res );
  },
  (err) => console.log( err));
}

removePoste( post ) {

  // Swal.fire({
  //   title: 'Are you sure?',
  //   text: "You won't be able to revert this!",
  //   type: 'warning',
  //   showCancelButton: true,
  //   confirmButtonColor: '#3085d6',
  //   cancelButtonColor: '#d33',
  //   confirmButtonText: 'Yes, delete it!'
  // }).then((result) => {
  //   if (result.value) {
  //     this.postService.removePoste( post.id).subscribe((res) => {
  //       this.posts.splice(post, 1 );
  //       console.log( res );
  //     },
  //     (err) => console.log( err));

  //     Swal.fire(
  //       'Deleted!',
  //       'Your file has been deleted.',
  //       'success'
  //     );
  //   }
  // });

}

}
