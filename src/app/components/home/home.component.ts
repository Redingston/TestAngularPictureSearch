import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {IImage} from 'src/Model/image';
import { IResponse } from 'src/Model/response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pictures: IImage[] = [];
  title = 'searchpictures';
  apiUrl: string = "https://pixabay.com/api/";
  key: string = '19279905-3c7fa9f75bec22d92f9011a4d';
  errorMes: 'There are no images that suits your criteria';
  image_type:string =  "photo";
  per_page:number = 10;
  searchValue: string;
  isError: boolean = false;

  constructor(private http: HttpClient){
  }

  ngOnInit(): void {
  }
 

  search=(serarch:string)=>{
    if(serarch != null){
     this.searchValue = serarch;
      return this.http.get(this.apiUrl + `?key=${this.key}&q=${this.searchValue}&image_type=${this.image_type}&per_page=${this.per_page}`)
      .subscribe(
        (response: IResponse) => {
          if(response.hits.length != 0){
            this.pictures = response.hits;
            this.isError=false;
            console.log(response);
          }
          else{
            console.log(response);
            this.isError=true;
          }
        }
      );
    }
  }
  setCount=(per_page:number)=>{
    if(per_page != null){
     this.per_page = per_page;
    }
  }
}


