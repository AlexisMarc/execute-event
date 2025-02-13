//Angular Core
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule,  HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


//Routing
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';

//Layouts
import { RootLayout, CondensedComponent } from './@pages/layouts';
//Layout Service - Required
import { pagesToggleService } from './@pages/services/toggler.service';

//Shared Layout Components
import { SidebarComponent } from './@pages/components/sidebar/sidebar.component';
import { QuickviewComponent } from './@pages/components/quickview/quickview.component';
import { QuickviewService } from './@pages/components/quickview/quickview.service';
import { SearchOverlayComponent } from './@pages/components/search-overlay/search-overlay.component';
import { HeaderComponent } from './@pages/components/header/header.component';
import { HorizontalMenuComponent } from './@pages/components/horizontal-menu/horizontal-menu.component';
import { SharedModule } from './@pages/components/shared.module';
import { pgListViewModule} from './@pages/components/list-view/list-view.module';
import { pgCardModule} from './@pages/components/card/card.module';
import { pgCardSocialModule} from './@pages/components/card-social/card-social.module';

import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { TabsModule } from 'ngx-bootstrap/tabs';

//Pages Globaly required Components - Optional
import { pgTabsModule } from './@pages/components/tabs/tabs.module';
import { pgSwitchModule } from './@pages/components/switch/switch.module';
import { ProgressModule } from './@pages/components/progress/progress.module';

import { NgxEchartsModule } from 'ngx-echarts';
import { StepsformDirective } from './social/stepsform.directive';
import { QuillModule } from 'ngx-quill';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

//Service - Demo content - Optional
import { ChartService } from './charts/charts.service';
import { SocialService } from './social/social.service';

//Social Page - Optional
import { SocialComponent } from './social/social.component';
import { CoverpageDirective } from './social/coverpage.directive';

//Demo Pages - Optional
import { FormWizardComponent } from './forms/form-wizard/form-wizard.component';
import { CardsComponentPage } from './cards/cards.component';
import { ViewsPageComponent } from './views/views.component';
import { ChartsComponent } from './charts/charts.component';

//Dashboard Widgets - Optional
import { DashboardModule } from './dashboard/dashboard.module';

//Dashboards - Optional
//import { CondensedDashboardComponent } from './dashboard/condensed/dashboard.component';
import { CorporateDashboardComponent } from './dashboard/corporate/dashboard.component';
import { ExecutiveDashboardComponent } from './dashboard/executive/dashboard.component';


//Font Awesone
import { AngularFontAwesomeModule } from 'angular-font-awesome';

//component Nexos
import { ReactiveFormsModule} from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { StorageServiceModule } from 'angular-webstorage-service';
import { DashboardComponent } from './@pages/layouts/Nexos/Componentes/dashboard/dashboard.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { Globals } from './@pages/layouts/Nexos/interface/globals.model';
import { LoginComponent } from './@pages/layouts/Nexos/Componentes/login/login.component';
import { Quorum2Component } from './@pages/layouts/Nexos/Componentes/quorum2/quorum2.component';
import { Documentos2Component } from './@pages/layouts/Nexos/Componentes/documentos2/documentos2.component';
import { Votacion2Component } from './@pages/layouts/Nexos/Componentes/votacion2/votacion2.component';
import { Votaciones2Component } from './@pages/layouts/Nexos/Componentes/votaciones2/votaciones2.component';
import { Resultados2Component } from './@pages/layouts/Nexos/Componentes/resultados2/resultados2.component';
import { ChatComponent } from './@pages/layouts/Nexos/Componentes/chat/chat.component';
import { PrevioComponent } from './@pages/layouts/Nexos/Componentes/previo/previo.component';
import { IndexComponent } from './@pages/layouts/Nexos/Componentes/index/index.component';
import { FinalizoComponent } from './@pages/layouts/Nexos/Componentes/finalizo/finalizo.component';
import { UserHelpComponent } from './@pages/layouts/Nexos/Componentes/user-help/user-help.component';

//Material of angular
import {MatExpansionModule} from '@angular/material/expansion';
import { MenuParticipantsComponent } from './@pages/layouts/Nexos/Componentes/menu-participants/menu-participants.component';
import { VotacionComponent } from './@pages/layouts/Nexos/Componentes/votacion/votacion.component';
import { RequestCredentialsComponent } from './@pages/layouts/Nexos/Componentes/request-credentials/request-credentials.component';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

//Hammer Config Overide
//https://github.com/angular/angular/issues/10541
export class AppHammerConfig extends HammerGestureConfig  {
  overrides = <any>{
      'pinch': { enable: false },
      'rotate': { enable: false }
  }
}

@NgModule({
  declarations: [
    AppComponent,
    CondensedComponent,
    SidebarComponent, QuickviewComponent, SearchOverlayComponent, HeaderComponent,HorizontalMenuComponent,
    RootLayout,
    CardsComponentPage,
    ViewsPageComponent,
    ChartsComponent,
    SocialComponent,
    StepsformDirective,
    CoverpageDirective,
    //CondensedDashboardComponent,
    // CorporateDashboardComponent,
    //ExecutiveDashboardComponent,
    DashboardComponent,
    LoginComponent,
    Quorum2Component,
    Documentos2Component,
    Votacion2Component,
    Votaciones2Component,
    Resultados2Component,
    ChatComponent,
    PrevioComponent,
    IndexComponent,
    FinalizoComponent,
    UserHelpComponent,
    MenuParticipantsComponent,
    VotacionComponent,
    RequestCredentialsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    ProgressModule,
    pgListViewModule,
    pgCardModule,
    RouterModule.forRoot(AppRoutes, { scrollPositionRestoration: 'disabled', useHash: true }),
    TabsModule.forRoot(),
    TypeaheadModule.forRoot(),
    pgTabsModule,
    QuillModule,
    pgSwitchModule,
    ReactiveFormsModule,
    EditorModule,
    MatExpansionModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [QuickviewService,pagesToggleService,ChartService,SocialService,Globals,{
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
  },
  {
    provide: HAMMER_GESTURE_CONFIG,
    useClass: AppHammerConfig

  }],
  bootstrap: [AppComponent],
})
export class AppModule { }
