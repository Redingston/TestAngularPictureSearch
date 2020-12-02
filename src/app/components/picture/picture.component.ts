import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IImage } from 'src/Model/image';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss']
})
export class PictureComponent implements OnInit {
  @Input() picture: IImage;


  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  Click=()=>{
    console.log(this.picture.id);
    this.router.navigate(['/full', {id: this.picture.id}]);
  }
}
