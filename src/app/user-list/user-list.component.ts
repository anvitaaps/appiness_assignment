import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { AppService } from '../app-service.service';

export interface UserData {
  avatar: any;
  username: string;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  title = 'anvita-zdaly-assignment';
  displayedColumns: string[] = ['image', 'name'];
  isLoader = true;
  dataSource: MatTableDataSource<UserData>;
  url;
  prev;
  next;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private appService: AppService, private router: Router) {
    this.url = 'https://api.github.com/users';
  }

  ngOnInit() {
    this.get_data(this.url);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
  get_data(url) {
    this.appService.get_data(url).subscribe((res)=> {
      this.isLoader = false;
      console.log("response",res);
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;    
    },
  (error)=>{
      console.log(error);
  });
  }

  view_data(row) {
    console.log(row);
    this.router.navigateByUrl('/user-repo');
    localStorage.setItem('current_username',row.login);
  }

}
