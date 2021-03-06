import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ACompComponent } from './a-comp/a-comp.component';
import { BCompComponent } from './b-comp/b-comp.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { CategoryComponent } from './category/category.component';
import { GameComponent } from './game/game.component';
import { CommentComponent } from './comment/comment.component';

@NgModule({
    declarations: [
        AppComponent,
        ACompComponent,
        BCompComponent,
        NotFoundComponent,
        CategoryComponent,
        GameComponent,
        CommentComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        RouterModule.forRoot([
            // { path: 'a', component: ACompComponent },
            // { path: 'country/:name', component: BCompComponent },
            // { path: 'b', component: BCompComponent },
            // { path: '**', component: NotFoundComponent }
            { path: 'games/:category', component: CategoryComponent },
            { path: ':category/:gameID', component: GameComponent },
            { path: 'comment', component: CommentComponent },
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
