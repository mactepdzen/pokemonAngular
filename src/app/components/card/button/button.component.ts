import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  status = 'Catch';

  constructor() {
  }

  ngOnInit(): void {
  }

  updateStatus(): void {
    if (this.status === 'Catch') {
      this.status = 'Let go';
    } else {
      this.status = 'Catch';
    }
  }
}
