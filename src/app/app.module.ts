import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { NgxsDispatchPluginModule } from '@ngxs-labs/dispatch-decorator';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsModule } from '@ngxs/store';
import { environment } from '../environments/environment.dev';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterModule } from './core/footer/footer.module';
import { HeaderModule } from './core/header/header.module';
import { CharactersState } from './shared/store/characters/characters.state';
import { FavoritesState } from './shared/store/favorites/favorites.state';
import { PaginationState } from './shared/store/pagination/pagination.state';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    FooterModule,
    HttpClientModule,
    NgxsDispatchPluginModule.forRoot(),
    NgxsModule.forRoot([FavoritesState, CharactersState, PaginationState]),
    environment.production ? [] : NgxsReduxDevtoolsPluginModule.forRoot(),
    environment.production ? [] : NgxsLoggerPluginModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
