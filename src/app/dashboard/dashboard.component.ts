import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  isValid: boolean = false;
  selectedLanguage: string = '';
  users: any = []
  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
   this.getUsers(); 
   
  }

  onCreateBlock() {
    this.isValid = !this.isValid;
  }

  getLanguage(language: any) {
    this.selectedLanguage = language.target.value;
  }

  getUsers() {
    this.httpService.products()
    .subscribe(users => {
      this.users = users;
      console.log(users);
      
    })
  }

}
