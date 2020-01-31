import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app-service.service';

@Component({
  selector: 'app-user-repo',
  templateUrl: './user-repo.component.html',
  styleUrls: ['./user-repo.component.css']
})
export class UserRepoComponent implements OnInit {

  data;
  current_username;
  constructor(private appService: AppService, private router: Router) {
    this.current_username = localStorage.getItem('current_username');
   }

  ngOnInit() {
    this.appService.get_data('https://api.github.com/users/'+this.current_username+'/repos').subscribe((res)=> {
      console.log("response",res);
      this.data = res;
    },
    (error)=>{
        console.log(error);
    });
  }

  back() {
    this.router.navigateByUrl('/user-list');
  }

}
