import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRepoComponent } from './user-repo.component';
import { RouterModule } from '@angular/router';
import { MatCardModule, MatIconModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';

const routes = [
  {
      path     : 'user-repo',
      component: UserRepoComponent
  }
];

@NgModule({
  declarations: [UserRepoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatListModule,
    MatIconModule
  ]
})
export class UserRepoModule { }
