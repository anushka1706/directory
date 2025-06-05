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
  selectedFolderId: BehaviorSubject<number | null> = new BehaviorSubject<number | null>(null);


  constructor() { }

  generateId() {
    const id: Date = new Date()
    return id.getTime()
  }

}
