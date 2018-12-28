import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserDetails } from '../../Models/users.details';
import { SharedProvider } from '../shared/shared';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {
  private searchSource = new BehaviorSubject('');
  
  searchUser = this.searchSource.asObservable();
  
  constructor(public http: HttpClient, private shared: SharedProvider) {
  }
  changeSearchID(userid: string) {
    this.searchSource.next(userid)
  }
  //Search By Userid Observable 
  getSearchUserModel(userid) : Observable<UserDetails[]> {
  
    return this.shared.db.collection<UserDetails>('users', ref => ref.where('userid', '==', userid)).valueChanges();
     
   }
}
