import { HttpClient } from '@angular/common/http';
import { ParsedVariable } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IImage } from 'src/Model/image';
import { IResponse } from 'src/Model/response';

@Component({
  selector: 'app-full-screan-picture',
  templateUrl: './full-screan-picture.component.html',
  styleUrls: ['./full-screan-picture.component.scss']
})
export class FullScreanPictureComponent implements OnInit {
  id: number;
  picture: IImage;
  apiUrl: string = "https://pixabay.com/api/";
  key: string = '19279905-3c7fa9f75bec22d92f9011a4d';
  errorMes: 'There are no images that suits your criteria';
  image_type:string =  "photo";
  
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.getPictureId();

    this.getPicture();
  }
  ngOnLoad
  getPictureId = () => {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
  }
  getPicture = () => {
    return this.http.get(this.apiUrl + `?key=${this.key}&image_type=${this.image_type}&id=${this.id}`)
    .subscribe(
      (response: IResponse) => {
        this.picture = response.hits[0];
        console.log(this.picture);
      }
  );
  }
}
