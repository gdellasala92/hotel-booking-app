import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelListComponent } from '../search/components/hotel-list/hotel-list.component';
import { HotelFormComponent } from '../search/components/hotel-form/hotel-form.component';
import { GmapComponent } from '../search/components/gmap/gmap.component';
import { RatesComponent } from '../search/components/rates/rates.component';
import { StarsComponent } from '../search/components/stars/stars.component';
import { ReservationsComponent } from '../search/components/reservations/reservations.component';
import { ImageGalleryComponent } from '../search/components/image-gallery/image-gallery.component';
import { ServicesComponent } from '../search/components/services/services.component';
import { ContactFormComponent } from '../search/components/contact-form/contact-form.component';
import { NoResultsComponent } from '../search/no-results.component';
import { SearchComponent } from '../search/search.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { SearchRountingModule } from './components/search-routing.module';

@NgModule({
  declarations: [
    SearchComponent,
    HotelListComponent,
    HotelFormComponent,
    GmapComponent,
    RatesComponent,
    StarsComponent,
    ReservationsComponent,
    ImageGalleryComponent,
    ServicesComponent,
    ContactFormComponent,
    NoResultsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    SearchRountingModule
  ],
})
export class SearchModule { }
