import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  getCakes(){
    return this._http.get('/api/cakes')
  }

  showOneCake(id){
    return this._http.get('/api/cakes/' + id);
  }

  addCake(newCake){
    return this._http.post('/api/cakes', newCake);
  }

  addReview(id, review){
    return this._http.put('/api/cakes/' + id, review);
  }

  constructor(private _http: HttpClient) {
    // this.getCakes();
  }
}
