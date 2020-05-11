import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-amazon2',
  templateUrl: './amazon2.component.html',
  styleUrls: ['./amazon2.component.css']
})
export class Amazon2Component implements OnInit {
  clothObject;
  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.share.subscribe(x => {
      this.clothObject = x;

    });
  }
}
