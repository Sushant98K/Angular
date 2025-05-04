import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {

  dummyData?: any
  isEligible?: boolean
  

  constructor(private _sharedData: SharedDataService) { 
    this.dummyData = _sharedData.userData

    this.isEligible = _sharedData.isEligibleForSubscription()
  }
  

  api_data?: any
  
  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this._sharedData.getUserData().subscribe(res => {
      this.api_data = res
    })
  }

}
