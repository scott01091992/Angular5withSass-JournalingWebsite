import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { FileSelectDirective , FileDropDirective} from 'ng2-file-upload';

import { JournalService } from './services/journal.service';
import { ReviewService } from './services/review.service';
import { ProfileService } from './services/profile.service';

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
import { JournalpageComponent } from './public/journalpage/journalpage/journalpage.component';
import { CalendarComponent } from './public/shared/calendar/calendar.component';
import { ReviewpageComponent } from './public/reviewpage/reviewpage/reviewpage.component';
import { ReviewAllComponent } from './public/shared/review-all/review-all.component';
import { ProfilepageComponent } from './public/profilepage/profilepage/profilepage.component';
import { ProfileComponent } from './public/shared/profile/profile.component';
import { MapObjectPipe } from './pipes/map-object.pipe';
import { CmspageComponent } from './admin/cmspage/cmspage/cmspage.component';
import { CmsHeaderComponent } from './admin/components/cms-header/cms-header.component';
import { ProfileEditorComponent } from './admin/components/profile-editor/profile-editor.component';
import { JournalEditorComponent } from './admin/components/journal-editor/journal-editor.component';
import { ReviewEditorComponent } from './admin/components/review-editor/review-editor.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomepageComponent
  },
  {
    path: 'journal',
    component: JournalpageComponent
  },
  {
    path: 'reviews',
    component: ReviewpageComponent,
    data: { title: 'Heroes List' }
  },
  {
    path: 'profile',
    component: ProfilepageComponent
  },
  {
    path: 'cms',
    component: CmspageComponent
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
  //{ path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    FileSelectDirective,
    HeaderComponent,
    FooterComponent,
    JournalLatestComponent,
    JournalRecentComponent,
    TimelineComponent,
    ObjectivesComponent,
    VideofeedComponent,
    ReviewLatestComponent,
    ReviewRecentComponent,
    HomepageComponent,
    JournalpageComponent,
    CalendarComponent,
    ReviewpageComponent,
    ReviewAllComponent,
    ProfilepageComponent,
    ProfileComponent,
    MapObjectPipe,
    CmspageComponent,
    CmsHeaderComponent,
    ProfileEditorComponent,
    JournalEditorComponent,
    ReviewEditorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [JournalService, ReviewService, ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
