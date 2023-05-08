import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent {
  id?: number;

  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = +this.route!.snapshot!.paramMap!.get('id')!;
  }
}
