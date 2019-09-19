import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'public';
  cakes = [];
  newCake: any;
  cakeToShow: any;

  constructor(private _httpService: HttpService){
    this.getCakesFromService();
    this.newCake = {
      name: "",
      image: ""
    };
  }

  ngOnInit(){
    // this.getCakesFromService();
    // this.newCake = {name: "", image: ""}
  }

  showOneCake(id){
    let observable = this._httpService.showOneCake(id);
    observable.subscribe(data=>{
      this.cakeToShow = data['cake_list'];
    })
  }

  // Create new cake method
  onSubmit(){
    let observable = this._httpService.addCake(this.newCake);
    observable.subscribe(data=>{
      console.log(data);
      this.newCake = {name: "", image: ""};
      this.getCakesFromService();
    })
  }

  // in review.component.ts
  // onRate(id, review){
  //   let observable = this._httpService.addReview(id, review);
  //   observable.subscribe(data=>{
  //     this.getCakesFromService();
  //   })
  // }

  getCakesFromService(){
    let observable = this._httpService.getCakes();
    observable.subscribe(data=>{
      this.cakes = data['cake_list']
      console.log("Got our data!", data)
    });
  }
}
