import { Component, OnInit } from '@angular/core';
import { GetApiService } from '../services/get-api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data: any;

  constructor(private getapi: GetApiService) { }
  ngOnInit() {
    this.getapi.getData().subscribe((res) => {
      this.data = res
    })
  }
  delete(id: number) {
    this.getapi.delete(id).subscribe()
    this.getapi.getData().subscribe((res) => {
      this.data = res
    })
  }
}
