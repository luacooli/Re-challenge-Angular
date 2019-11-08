import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RepoService } from '../services/repo.service';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RepoComponent implements OnInit {

  repository: any = [];

  constructor(private repoService: RepoService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.repoService.getRepos().subscribe(res => {
      this.repository = res;
      this.cdr.markForCheck();
    });
  }

}
