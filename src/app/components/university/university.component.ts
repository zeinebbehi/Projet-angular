import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http" ;

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.css']
})
export class UniversityComponent implements OnInit {

  public universitiesList: any[] = []

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>("https://localhost:1337/universities").subscribe(
      result => {this.universitiesList = result
      },
      error => {
        console.log(error) ;
      }

    )
  }

}
