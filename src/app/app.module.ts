import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes , RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WelcomeareaComponent } from './welcomearea/welcomearea.component';
import { CategoryareaComponent } from './categoryarea/categoryarea.component';
import { AboutComponent } from './about/about.component';
import { FAreaComponent } from './f-area/f-area.component';
import { FeatureComponent } from './feature/feature.component';
import { UserAuthenticationComponent } from './user-authentication/user-authentication.component';
import { BodyComponent } from './body/body.component';
import { AboutusComponent } from  './aboutus/aboutus.component';
import { GalleryareaComponent } from './galleryarea/galleryarea.component';
import { LoginComponent } from './Authentication/login/login.component';
import { SignupComponent } from './Authentication/signup/signup.component';
import { NorthComponent } from './north/north.component';
import { SouthComponent } from './south/south.component';
import { WestComponent } from './west/west.component';
import { EastComponent } from './east/east.component';
import { CentralComponent } from './central/central.component';
import { NortheastComponent } from './northeast/northeast.component';

const way: Routes = [
  { path: '', component: WelcomeareaComponent},
  { path: 'contact', component: BodyComponent},
  { path: 'about-us', component: AboutusComponent},
  { path:'gallery',component:GalleryareaComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'north',component:NorthComponent},
  { path: 'south',component:SouthComponent},
  { path: 'west',component:WestComponent},
  { path: 'east',component:EastComponent},
  { path: 'central', component:CentralComponent},
  { path: 'northeast', component:NortheastComponent},
  
  
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeareaComponent,
    CategoryareaComponent,
    AboutComponent,
    FAreaComponent,
    FeatureComponent,
    UserAuthenticationComponent,
    BodyComponent,
    AboutusComponent,
    GalleryareaComponent,
    LoginComponent,
    SignupComponent,
    NorthComponent, 
    SouthComponent, 
    WestComponent, 
    EastComponent, 
    CentralComponent, NortheastComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(way),

 ],
  providers: [    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
