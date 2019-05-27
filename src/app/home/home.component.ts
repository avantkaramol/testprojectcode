import { Component, OnInit } from '@angular/core';
import {Observable,of, from } from 'rxjs';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';

import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  twitterData:any;
  twitterUser: object;
  error: any; 	
  isResult:boolean = false;
  username = '';
  constructor( 
  	private apollo: Apollo,
  	private route: ActivatedRoute
  ) { }

  ngOnInit() {

  	  this.route.queryParams.subscribe(params => {
	    this.username = params.username;
	    if(this.username){
	    	this.getTweetResult(this.username.trim());
	    }
	  });

  }

  getTweetResult(username){
  	this.apollo
      .watchQuery({
        query: gql`
          {
            twitter {
              user(identifier: name, identity: "${username}") {
                created_at
                description
                id
                screen_name
                name
                profile_image_url
                url
                tweets_count
                followers_count
                tweets(limit: 10) {
                  text
                }
              }
            }
          }
        `,
      })
      .valueChanges.subscribe((result) => {
        if(result.data){
        	this.twitterData = result.data;
        	this.twitterUser = this.twitterData && this.twitterData.twitter ? this.twitterData.twitter.user : {};
        	if(result.errors){
        		this.error =  result.errors[0].message;;
        		this.isResult = false; 
        	}else{
        		this.error = "";
        		this.isResult = true; 
        	}
        	
        	   	        	
        }        
      }, error=>{
      	this.error = "User Not Found";
      	this.isResult = false; 
      	this.twitterUser = {};
      });
  }
  

}
