import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {}

  getTasks(){
    return this._http.get('/tasks');
  }

  getTask(id){
    return this._http.get(`/tasks/${id}`);
  }

  addTask(newtask){
    return this._http.post('/task', newtask)
}

}
