import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sidepanel',
  templateUrl: './sidepanel.component.html',
  styleUrls: ['./sidepanel.component.scss']
})

export class SidepanelComponent implements OnInit {
  allData: any[] = []

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.allData = this.dataService.fileHeirarchy
    console.log(this.allData)
  }
  onAction(action: string) {
    this.dataService.action.next(action)
  }
}
