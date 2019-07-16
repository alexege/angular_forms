import { HttpService } from './http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  newTask: any;
  constructor(private _httpService: HttpService){}
  
  ngOnInit(){
    // this.getTasksFromService();
    this.newTask = {title: "", description: ""}
  }

  title = 'MEAN';
  tasks = [];
  one_task: any;
  
  onSubmit() {
    let observable = this._httpService.addTask(this.newTask);
    observable.subscribe(data => {
      console.log("Got data from post back", data);
      this.newTask = {title: "", description: ""}
    })
  }  

  getTasksFromService(){
    this._httpService.getTasks().subscribe(data => {
      console.log(data);
      this.tasks = data.tasks;
    }
    )};
  
  getTaskFromService(id){
    this._httpService.getTask(id).subscribe(data => {
      console.log(data);
      this.one_task = data.tasks;
    }
    )};
}