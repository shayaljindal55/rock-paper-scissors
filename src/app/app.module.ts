import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LandingScreenComponent } from './component/landing-screen/landing-screen.component';
import { SelectMoveComponent } from './component/select-move/select-move.component';
import { ShowResultComponent } from './component/show-result/show-result.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    LandingScreenComponent,
    SelectMoveComponent,
    ShowResultComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
