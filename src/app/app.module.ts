import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './public/shared/header/header.component';
import { FooterComponent } from './public/shared/footer/footer.component';
import { JournalLatestComponent } from './public/shared/journal-latest/journal-latest.component';
import { JournalRecentComponent } from './public/shared/journal-recent/journal-recent.component';
import { TimelineComponent } from './public/shared/timeline/timeline.component';
import { ObjectivesComponent } from './public/shared/objectives/objectives.component';
import { VideofeedComponent } from './public/shared/videofeed/videofeed.component';
import { ReviewLatestComponent } from './public/shared/review-latest/review-latest.component';
import { ReviewRecentComponent } from './public/shared/review-recent/review-recent.component';
import { HomepageComponent } from './public/homepage/homepage/homepage.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    JournalLatestComponent,
    JournalRecentComponent,
    TimelineComponent,
    ObjectivesComponent,
    VideofeedComponent,
    ReviewLatestComponent,
    ReviewRecentComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
