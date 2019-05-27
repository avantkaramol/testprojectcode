import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-tweet',
  templateUrl: './search-tweet.component.html',
  styleUrls: ['./search-tweet.component.css']
})
export class SearchTweetComponent implements OnInit {

 searchForm : FormGroup;
 @Input() searchName?:string;
  constructor( public router: Router ) { }

  ngOnInit() {
  	this.createSearchForm();
  	this.searchForm.setValue({searchTweet : this.searchName});
  }

  createSearchForm(){

	  this.searchForm = new FormGroup({
	    searchTweet: new FormControl(''),
	  });

  }

  searchTweetSubmit(){
  	this.router.navigate(['/home'], {queryParams:{username:this.searchForm.value.searchTweet}});
  }


}
