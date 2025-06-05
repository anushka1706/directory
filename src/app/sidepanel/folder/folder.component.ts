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
  selectedType !: string

  constructor(private dataService: DataService) { }

  isExpanded: boolean = false

  ngOnInit(): void {
    this.currentFolder = this.mainFolder;

    this.dataService.action.subscribe(action => {
      this.action = action;
    });

    this.dataService.selectedFolderId.subscribe(id => {
      this.showInput = this.mainFolder['id'] === id;
    });
  }

  expandFolder(e: Event) {
    e.stopPropagation()
    this.isExpanded = !this.isExpanded
  }

  onCreateChild(e: any) {
    e.stopPropagation()
    const value = e.target.value;
    this.showInput = false;

    this.mainFolder['child'] = this.mainFolder['child'] || [];

    const data = {
      name: value,
      type: this.selectedType,
      id: this.dataService.generateId(),
      parentId: this.mainFolder['id'],
      child: []
    };

    this.mainFolder['child'].push(data);
    console.log(this.mainFolder)
  }

  setAsSelectedFolder(event: MouseEvent) {
    event.stopPropagation();
    this.dataService.selectedFolderId.next(this.mainFolder['id']);
  }
  onAction(type: string) {
    this.selectedType = type
  }
  onBlur() {
    this.isExpanded = false
  }
}
