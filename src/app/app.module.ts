import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { NgbModule, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { GoogleMapsModule } from '@angular/google-maps';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { FilesComponent } from './modules/home/files/files.component';
import { FilesMapComponent } from './modules/home/files-map/files-map.component';
import { NewsComponent } from './modules/home/news/news.component';
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';
import { SidebarComponent } from './ui/sidebar/sidebar.component';
import { NewFileComponent } from './modules/home/new-file/new-file.component';
import { AnalyticsComponent } from './modules/home/analytics/analytics.component';
import { ComparablesComponent } from './modules/comparables/comparables.component';
import { AddendaComponent } from './modules/comparables/addenda/addenda.component';
import { CompDeedsComponent } from './modules/comparables/comp-deeds/comp-deeds.component';
import { GridComponent } from './modules/comparables/grid/grid.component';
import { MapComponent } from './modules/comparables/map/map.component';
import { MarketConditionsComponent } from './modules/market-conditions/market-conditions.component';
import { GraphsComponent } from './modules/market-conditions/graphs/graphs.component';
import { McDetailComponent } from './modules/market-conditions/mc-detail/mc-detail.component';
import { ReportComponent } from './modules/market-conditions/report/report.component';
import { SubjectComponent } from './modules/subject/subject.component';
import { SubjectDetailComponent } from './modules/subject/subject-detail/subject-detail.component';
import { SubjectDeedsComponent } from './modules/subject/subject-deeds/subject-deeds.component';
import { ImportComponent } from './modules/market-conditions/import/import.component';
import { UploadComponent } from './modules/comparables/upload/upload.component';
import { SubjectSearchComponent } from './modules/subject/subject-search/subject-search.component';
import { SummaryComponent } from './modules/summary/summary.component';

import { NgbDateCustomParserFormatter } from './core/formatter/ngb-date-parser-formatter';
import { MlsSearchComponent } from './modules/home/new-file/mls-search/mls-search.component';
import { ApnSearchComponent } from './modules/home/new-file/apn-search/apn-search.component';
import { AddressSearchComponent } from './modules/home/new-file/address-search/address-search.component';
import { MapsComponent } from './modules/home/new-file/maps/maps.component';
import { PropertyDetailComponent } from './modules/home/new-file/property-detail/property-detail.component';
import { FileUploadComponent } from './modules/common/file-upload/file-upload.component';
import { SearchErrorComponent } from './modules/home/new-file/search-error/search-error.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        FilesComponent,
        FilesMapComponent,
        NewsComponent,
        HeaderComponent,
        FooterComponent,
        SidebarComponent,
        NewFileComponent,
        AnalyticsComponent,
        ComparablesComponent,
        AddendaComponent,
        CompDeedsComponent,
        GridComponent,
        MapComponent,
        MarketConditionsComponent,
        GraphsComponent,
        McDetailComponent,
        ReportComponent,
        SubjectComponent,
        SubjectDetailComponent,
        SubjectDeedsComponent,
        ImportComponent,
        UploadComponent,
        SubjectSearchComponent,
        SummaryComponent,
        MlsSearchComponent,
        ApnSearchComponent,
        AddressSearchComponent,
        MapsComponent,
        PropertyDetailComponent,
        FileUploadComponent,
        SearchErrorComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpClientModule,
        AgmCoreModule.forRoot({ apiKey: 'AIzaSyAs_Y6kGdxcrtXwIaNvaexYCMsiw4o22i0' }),
        NgbModule,
        GoogleMapsModule
    ],
    providers: [
      { provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
