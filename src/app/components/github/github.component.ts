import { Component, OnInit } from '@angular/core';

import { GithubService } from './../../services/github.service';

@Component({
  selector: 'github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css'],
  providers: [GithubService] 
})
export class GithubComponent implements OnInit {
  user: any;
  repos: any;
  username: string;

  constructor(private _githubService: GithubService) { 
    console.log('Componente iniciado ...')
  }

  ngOnInit() {
    
    //this.getData();
  }

  search(){
    this._githubService.updateUsername(this.username);

    this.getData();
  }

  getData() {
    this._githubService.getUser().subscribe(user => {
      this.user = user;
    });

    this._githubService.getRepos().subscribe(repos => {
      this.repos = repos;
    });
  }

}
