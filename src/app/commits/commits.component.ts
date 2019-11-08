import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { RepoService } from '../services/repo.service';

@Component({
  selector: 'app-commits',
  templateUrl: './commits.component.html',
  styleUrls: ['./commits.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommitsComponent implements OnInit {

  commits: any = [];
  repo: string;

  constructor(private repoService: RepoService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.repoService.getCommits(this.repo).subscribe(res => {
      this.commits = res;
      this.cdr.markForCheck();
    })
  }

}
