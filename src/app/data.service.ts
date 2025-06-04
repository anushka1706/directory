import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  expandedParent: number = 0
  action: BehaviorSubject<string> = new BehaviorSubject<string>('')
  newData: BehaviorSubject<{ [key: string]: any }> = new BehaviorSubject<{ [key: string | number]: any }>({})
  fileHeirarchy: any[] = []

  constructor() { }

  generateId() {
    const id: Date = new Date()
    return id.getTime()
  }
  delete(id: any) {
    this.fileHeirarchy.forEach(item => {
      if (item["id"] === id) {
        const index = this.fileHeirarchy.indexOf(item)
        this.fileHeirarchy.splice(index, 1)
      }
    })
  }
}
