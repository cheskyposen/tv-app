import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {CdkTableModule} from '@angular/cdk/table';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './views/search/search.component';
import { ShowsComponent } from './views/shows/shows.component';
import { EpisodesComponent } from './views/episodes/episodes.component';
import { NavComponent } from './views/nav/nav.component';
import { SeasonsComponent } from './views/seasons/seasons.component';
import { CountdownDirective } from './controllers/countdown.directive';
import { NextEpisodeComponent } from './views/next-episode/next-episode.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ShowsComponent,
    EpisodesComponent,
    NavComponent,
    SeasonsComponent,
    CountdownDirective,
    NextEpisodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    CdkTableModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatExpansionModule,
    MatListModule,
    FlexLayoutModule,
    MatDividerModule,
    MatCardModule,
    MatSlideToggleModule,
    MatChipsModule,
    MatBottomSheetModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [NextEpisodeComponent]
})
export class AppModule { }
