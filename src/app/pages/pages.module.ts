import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { ViewallstudentsComponent } from './viewallstudents/viewallstudents.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule} from '@angular/material/paginator';
import { AddstudentComponent } from './addstudent/addstudent.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ViewonestudentComponent } from './viewonestudent/viewonestudent.component';
@NgModule({
  declarations: [
    PagesComponent,
    ViewallstudentsComponent,
    AddstudentComponent,
    UpdatestudentComponent,
    ViewonestudentComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,

    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule
  ]
})
export class PagesModule { }
