import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators  } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-tweet',
  templateUrl: './search-tweet.component.html',
  styleUrls: ['./search-tweet.component.css']
})
export class SearchTweetComponent implements OnInit {

 searchForm : FormGroup;
 @Input() searchName?:string;
 isSubmitted  =  false;
  constructor( public router: Router ) { }

  ngOnInit() {
  	this.createSearchForm();
  	this.searchForm.setValue({searchTweet : this.searchName});
  }

  createSearchForm(){

	  this.searchForm = new FormGroup({
	    searchTweet: new FormControl('',[Validators.required]),
	  });

  }


  get formControls() { return this.searchForm.controls; }

  searchTweetSubmit(){
  	this.isSubmitted = true;
    if(this.searchForm.invalid){
      return;
    }

  	this.router.navigate(['/home'], {queryParams:{username:this.searchForm.value.searchTweet}});
  }


}
