import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './core/components/layouts/account/account.component';
import { DashboardComponent } from './core/components/layouts/dashboard/dashboard.component';
import { TitleResolverService } from './core/services/Route-title/title-resolver.service';
import { SummaryComponent } from './pages/dashboard/summary/summary.component';

@NgModule({
  declarations: [AppComponent, AccountComponent, DashboardComponent, SummaryComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [TitleResolverService],
  bootstrap: [AppComponent],
})
export class AppModule {}
