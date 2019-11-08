import {Component, OnInit} from '@angular/core';
import {RepoService} from '../services/repo.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  user: any = {
    login: '',
    followers: '',
    following: '',
    public_repos: '',
    type: '',
    avatar_url: ''
  };

  constructor(private repoService: RepoService) {
  }

  ngOnInit() {
    this.repoService.getUserInfo().subscribe(res => this.user = res);
  }

}
