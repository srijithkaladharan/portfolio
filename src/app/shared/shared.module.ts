import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileImageBoxComponent } from './profile-image-box/profile-image-box.component';
import { SlidingImagesComponent } from './sliding-image/sliding-image.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HeaderComponent } from './header/header.component';
import { SectionTitleComponent } from './section-title/section-title.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalDialogComponent } from './modal-dialog/modal-dialog.component';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProfileImageBoxComponent,
    SlidingImagesComponent,
    HeaderComponent,
    SectionTitleComponent,
    ModalDialogComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatProgressBarModule,
    MatBadgeModule,
    MatDialogModule,
    ClipboardModule,
    FormsModule
  ],
  exports: [
    ProfileImageBoxComponent,
    SlidingImagesComponent,
    HeaderComponent,
    SectionTitleComponent,
    ModalDialogComponent
  ]
})
export class SharedModule { }
