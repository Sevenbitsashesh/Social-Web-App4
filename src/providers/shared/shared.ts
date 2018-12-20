import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetails } from 'src/Models/users.details';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { configusers } from '../../Models/users_firestore';
import { Observable } from 'rxjs/Observable';
// import * as firebase from 'firebase/a';

@Injectable()
export class SharedProvider {
  model: UserDetails;
  loggedUser: any;
  userscollection: AngularFirestoreCollection<UserDetails>;
  
  constructor(public http: HttpClient, private router: Router, public db: AngularFirestore) {
    // console.log('Hello SharedProvider Provider');
   this.userscollection = this.db.collection<UserDetails>(configusers.collection_endpoint);
  }
  addInfo(model) {
    console.log(model);
     this.userscollection.add(model);
    if (true ) {
      this.router.navigate(['/userhome']);
    }
  }
  // Profile data update of user by uid
  saveProfile(model, uid) {
    console.log(model, uid);
     this.db.doc<UserDetails>(`users/${uid}`).set(model).then(saved => {
      this.router.navigate(['/userhome']);
     }).catch(error => console.log(error));
  }
  getLogged() {
    console.log('getlogged', localStorage.getItem('usermail'));
    return localStorage.getItem('usermail');
  }
  // Checking Login
  checkLogin() {
    if (localStorage.getItem('usermail') !== null ) {
      // setting login user
       this.loggedUser = this.getLogged();
        // this.loggedUser = this.loggedUser.toLowerCase();
       // this.router.navigateByUrl('/tabs/(home_tab:home_tab)');
       this.router.navigate(['/userhome']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
