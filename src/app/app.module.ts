import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {UserInfoComponent} from './user-info/user-info.component';
import {RouterModule, Routes} from '@angular/router';
import { RepoComponent } from './repo/repo.component';
import {HttpClientModule} from '@angular/common/http';
import { CommitsComponent } from './commits/commits.component';

const routes: Routes = [
  {
    path: '',
    component: UserInfoComponent
  },
  {
    path: 'repos',
    component: RepoComponent
  },
  {
    path: 'commits',
    component: CommitsComponent
  },
  // {
  //   path: 'github',
  //   component:
  // }
];

@NgModule({
  declarations: [
    AppComponent,
    UserInfoComponent,
    RepoComponent,
    CommitsComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
