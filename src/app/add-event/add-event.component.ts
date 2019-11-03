import { Component, OnInit } from '@angular/core';
import {AddEventService} from './add-event.service';
import {AddEvent} from './add-event';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})


export class AddEventComponent implements OnInit {

  addevent: AddEvent = new AddEvent();
  submitted = false;
 
  constructor(private addeventService: AddEventService) { }

  ngOnInit() {
  }

  newEvent(): void {
    this.submitted = false;
    this.addevent = new AddEvent();
  }

  save() {
    this.addeventService.pushFileToStorage(this.addevent);
    this.addevent = new AddEvent();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }


}
