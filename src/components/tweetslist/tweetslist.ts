import { Component } from '@angular/core';
import { UseractivityProvider } from '../../providers/useractivity/useractivity';
import { FollowProvider } from '../../providers/follow/follow';
import { LikeProvider } from '../../providers/like/like';
 
@Component({
  selector: 'tweetslist',
  templateUrl: 'tweetslist.html'
})
export class TweetslistComponent {
  tweetcontent;
  tweets: any[];
  t_title;
  background= [];
  users = [];
  showing;
  constructor(private userActivity: UseractivityProvider, private followService: FollowProvider, private likeService : LikeProvider) {
    
    // this.matProgress.
    // this.getTweet();
    followService.userFollowingsObs.subscribe(items => {
     this.users = items;
     
        });
        this.users.forEach(i => {
          
          this.userActivity.getTweets(i);
          // console.log(this.userActivity.usersTweets);
          this.tweets = userActivity.usersTweets; 
          this.showing = this.userActivity.hide; 
       })
  }
  getTweet() {
    console.log('data :', this.tweets.length );
    for (let index = 0; index < this.tweets.length; index++) {
      this.background.push(this.getRandomColor());
    }
    console.log('back', this.background[0]);
     this.background.push();
 }
 getRandomColor() {
  var color = Math.floor(0x1000000 * Math.random()).toString(16);
  return "#" + ("000000" + color).slice(-6);
  }
  onLike(s) {
    s.target.classLists.remove('button-like')
  }
}
