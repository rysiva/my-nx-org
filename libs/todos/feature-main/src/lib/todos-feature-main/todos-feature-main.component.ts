import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'my-nx-org-todos-feature-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todos-feature-main.component.html',
  styleUrls: ['./todos-feature-main.component.scss'],
})
export class TodosFeatureMainComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
