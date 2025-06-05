import { Component, Input } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})

export class FileComponent {
  @Input() mainFile  !: { [key: string]: string | number | any[] | null }

  constructor(private dataService: DataService){}
  
}
