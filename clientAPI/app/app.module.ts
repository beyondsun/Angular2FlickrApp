import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { PhotoModalComponent }  from './components/photo-modal.component';
import { SortByPipe }  from './pipes/photo-sort.pipe';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, PhotoModalComponent, SortByPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }