import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { environment } from 'src/environments/environment';
import { DemoInputDataComponent } from './Components/demo-input-data/demo-input-data.component';
import { CrudService } from './service/crud.service';
import { ViewDataComponent } from './Components/view-data/view-data.component';
import { EditDataComponent } from './Components/edit-data/edit-data.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DemoInputDataComponent,
    ViewDataComponent,
    EditDataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [CrudService],
  bootstrap: [AppComponent],
})
export class AppModule {}
