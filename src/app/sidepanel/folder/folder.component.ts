import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss']
})

export class FolderComponent implements OnInit {

  isParent: boolean = false
  @Input() mainFolder !: { [key: string]: any }
  currentFolder !: { [key: string]: any }
  action !: string
  showInput: boolean = false

  constructor(private dataService: DataService) { }

  isExpanded: boolean = false
  // expandedFolders: any[] = []

  ngOnInit(): void {
    this.currentFolder = this.mainFolder
    this.dataService.action.subscribe(action => {
      this.action = action
      this.showInput = true
    })
  }

  expandFolder() {
    this.isExpanded = !this.isExpanded
  }

  onCreateChild(e: any) {
    const value = e.target.value
    this.showInput = false
    const data = {
      name: value,
      type: this.action,
      id: this.dataService.generateId(),
      parentId: this.currentFolder['id'],
      child: []
    }
    this.currentFolder['child']?.push({
      id: data.id,
      type: data.type,
      name: data.name
    })
    // this.childData.push(data);
    console.log(this.currentFolder)
    this.currentFolder = data
  }
}
