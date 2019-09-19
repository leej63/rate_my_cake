import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  newReview: any;
  @Input() cakeToReview: any;

  constructor(private _httpService: HttpService) {
    this.newReview = {
      rate: null,
      comment: null
    }
  }

  leaveReview(){
    let observable = this._httpService.addReview(this.cakeToReview._id, this.newReview);
    observable.subscribe(data=>{
      console.log(data);
      // this.getCakesFromService();
    })
  }

  ngOnInit() {
  }

}
