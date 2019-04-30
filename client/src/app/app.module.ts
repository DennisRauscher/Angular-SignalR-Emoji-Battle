import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
	NbThemeModule,
	NbSidebarModule,
	NbLayoutModule,
	NbSidebarService,
	NbButtonModule,
	NbListModule,
	NbSpinnerModule,
	NbCardModule,
	NbProgressBarModule
} from '@nebular/theme';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { SearchViewComponent } from './search-view/search-view.component';
import { GameService } from './shared/game.service';

const appRoutes: Routes = [
	{ path: 'search', component: SearchViewComponent },
	{ path: '', redirectTo: '/search', pathMatch: 'full' }
];
@NgModule({
	declarations: [
		AppComponent,
		SearchViewComponent
	],
	imports: [
		RouterModule,
		BrowserModule,
		AppRoutingModule,
		NbThemeModule.forRoot(),
		RouterModule.forRoot(
			appRoutes
		),
		NbLayoutModule,
		NbSidebarModule,
		NbButtonModule,
		NbListModule,
		NbSpinnerModule,
		NbCardModule,
		NbProgressBarModule
	],
	providers: [NbSidebarService, GameService],
	bootstrap: [AppComponent]
})
export class AppModule { }
