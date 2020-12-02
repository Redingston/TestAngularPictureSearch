import { Component, Input, OnInit } from '@angular/core';
import { IImage } from 'src/Model/image';

@Component({
  selector: 'app-pictures-list',
  templateUrl: './pictures-list.component.html',
  styleUrls: ['./pictures-list.component.scss']
})
export class PicturesListComponent implements OnInit {
  @Input() pictures: IImage[];
  constructor() { }

  ngOnInit(): void {
  }

}
