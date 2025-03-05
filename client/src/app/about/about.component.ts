import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    console.log(this.route.snapshot.paramMap.get('name'));
  }
}
