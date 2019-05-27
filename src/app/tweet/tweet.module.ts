import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchTweetComponent } from './search-tweet/search-tweet.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SearchTweetComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [SearchTweetComponent]
})
export class TweetModule { }
