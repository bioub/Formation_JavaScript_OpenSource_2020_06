import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  @Input() items = [];
  @Input() selected = '';

  @Output() selectedChange = new EventEmitter();

  show = false;

  constructor() { 
    console.log('constructor', this.items);
  }

  ngOnInit(): void {
    // ici on a reçu les valeurs de app
    if (this.items.length && !this.selected) {
      this.selected = this.items[0];
    }
  }

  handleSelect(item) {
    this.selected = item;
    this.show = false;
    this.selectedChange.emit(item);
  }

}
