import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping/shopping-list/shopping-edit/shopping-edit.component';
import { ReceipesComponent } from './receipes/receipes.component';
import { ReceipesListComponent } from './receipes/receipes-list/receipes-list.component';
import { ReceipesItemComponent } from './receipes/receipes-list/receipes-item/receipes-item.component';
import { ReceipesDetailsComponent } from './receipes/receipes-details/receipes-details.component';
import { CssLearningComponent } from './css/css-learning/css-learning.component'
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    ReceipesComponent,
    ReceipesListComponent,
    ReceipesItemComponent,
    ReceipesDetailsComponent,
    CssLearningComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
