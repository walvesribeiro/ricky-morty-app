import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { environment } from '../environments/environment.dev';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { FavoritesState } from './store/favorites/favorites.state';
import { CharactersState } from './store/characters/characters.state';
import { NgxsModule } from '@ngxs/store';
import { HttpClientModule } from '@angular/common/http';
import { NgxsDispatchPluginModule } from '@ngxs-labs/dispatch-decorator';
import { PaginationState } from './store/pagination/pagination.state';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
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
