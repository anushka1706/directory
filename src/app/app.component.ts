import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form !: FormGroup
  showForm: boolean = false
  formData: { [key: string]: string } = {}

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.buildForm()
  }

  buildForm() {
    this.form = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'type': new FormControl(null, [Validators.required])
    });
  }
  onCreateNew() {
    this.showForm = true
  }

  onAdd() {
    const data = {
      name: this.form.value.name,
      type: this.form.value.type,
      id: this.dataService.generateId(),
      child: [],
      parentId: null
    }
    this.dataService.newData.next(data)
    this.dataService.fileHeirarchy.push(data)
    this.form.reset()
    this.showForm = false
  }
  onClose() {
    this.form.reset()
    this.showForm = false
  }
}
