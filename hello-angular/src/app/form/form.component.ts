import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  contact = {
    prenom: 'Romain',
    nom: 'Bohdanowicz',
  }

  constructor() { }

  ngOnInit(): void {
  }

  handleSubmit(event: Event) {
    event.preventDefault();
  }
}
