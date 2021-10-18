import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserContainerComponent } from './features/user-container/user-container.component';
import { UserTabBarComponent } from './features/user-tab-bar/user-tab-bar.component';
import { UserCardViewComponent } from './features/user-card-view/user-card-view.component';
import { UserListViewComponent } from './features/user-list-view/user-list-view.component';
import { UserOrdersComponent } from './features/user-orders/user-orders.component';
import { UserEditComponent } from './features/user-edit/user-edit.component';
import { ModelDeleteComponent } from '../shared/components/model-delete/model-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    UserContainerComponent,
    UserTabBarComponent,
    UserCardViewComponent,
    UserListViewComponent,
    UserOrdersComponent,
    UserEditComponent,
    ModelDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
