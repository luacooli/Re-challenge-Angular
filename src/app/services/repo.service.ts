import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RepoService {

  constructor(private http: HttpClient) {
  }

  getRepos() {
    return this.http.get('https://api.github.com/users/luana2813/repos');
  }

  getUserInfo() {
    return this.http.get('https://api.github.com/users/luana2813');
  }

  getCommits(repos) {
    return this.http.get(`https://api.github.com/repos/luana2813/${repos}/commits`)
  }

  goGithub(repos: string) {
    return this.http.get(`https://github.com/luana2813/${repos}`);
  }

}
