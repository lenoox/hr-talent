import { Component, OnInit } from '@angular/core';
import {JobOffersService} from "../../core/services/job-offers.service";

@Component({
  selector: 'app-job-offers',
  templateUrl: './job-offers.component.html',
  styleUrls: ['./job-offers.component.scss']
})
export class JobOffersComponent implements OnInit {
  public jobOffersData: any;
  constructor(private jobOffersService: JobOffersService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(): void {
    this.jobOffersService.getAll().subscribe((data:any)=>{
      this.jobOffersData = data
    })
  }
}
