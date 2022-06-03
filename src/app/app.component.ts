import { Component, VERSION } from '@angular/core';
import { Meta } from '@angular/platform-browser';
let META_DESCRIPTION: string = 'metaDescription';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private metaTagService: Meta) {}

  ngOnInit() {
    if (this.conditionForIndexing()) this.setIndexingForRobots();
  }

  conditionForIndexing() {
    if (true) return true;
  }

  setIndexingForRobots() {
    let metaDescription = META_DESCRIPTION;
    this.metaTagService.addTag({ name: 'robots', content: 'index, follow' });
    this.metaTagService.addTag({
      name: 'description',
      content: metaDescription,
    });
  }
}
