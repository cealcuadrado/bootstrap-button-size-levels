import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  level: number;
  size: number;

  constructor() { }

  ngOnInit(): void {
    this.level = 1;
  }

  setLevelSize(): string {
    return `level-${this.level}`;
  }

  setSize(): string {
    switch (this.size) {
      case 1: { return 'btn-sm'; break; }
      case 2: { return 'btn-md'; break; }
      case 3: { return 'btn-lg'; break; }
      default: { return 'btn-md';}
    }
  }
}
