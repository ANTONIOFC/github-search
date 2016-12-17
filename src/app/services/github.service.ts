import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
    private username = 'antoniofc';
    private client_id = 'c9850d00a5e939412be1';
    private client_secret='b0908311fa25818f36e382f232bc36f3ebe7a286';

    constructor(private _http: Http) {
      console.log('Github Service Init...');
    }

    getUser(){
        return this._http.get('https://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
    }
    
    getRepos(){
        return this._http.get('https://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
    }
    
    updateUsername(username:string){
        this.username = username;
    }
}
