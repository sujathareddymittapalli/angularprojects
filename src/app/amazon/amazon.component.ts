import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

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
pdp(){
  //alert("pdp");
  this.router.navigate(['amazon2']);
}
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
