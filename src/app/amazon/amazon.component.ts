import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-amazon',
  templateUrl: './amazon.component.html',
  styleUrls: ['./amazon.component.css']
})
export class AmazonComponent implements OnInit {
  clothes=[{
    "title":"himalaya",
    "year":"2013",
    "poster":"assets/images/pure.jpg",
    "id":1
  }

]


  constructor(private router:Router, private data : DataService) { }

  ngOnInit(): void {
  }

  pdp(){
    this.router.navigate(['amazon2']);
  }

}
