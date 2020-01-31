import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserListModule } from './user-list/user-list.module';
import { UserRepoModule } from './user-repo/user-repo.module';

const appRoutes: Routes = [
  {
      path      : 'user-repo',
      redirectTo: 'user-repo'
  },
  {
    path      : '**',
    redirectTo: 'user-list'
  }
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    UserListModule,
    UserRepoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
