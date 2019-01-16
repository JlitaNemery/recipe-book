import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { SharedModule } from "../components/shared/shared.module";
import { AppRoutingModule } from "../app-routing.module";
import { RecipeService } from "../components/shared/recipe.service";
import { DatabaseStorageService } from "../components/shared/data-storage.service";
import { AuthService } from "../auth/auth.service";

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent
    ],
    imports: [
        SharedModule,
        AppRoutingModule
    ],
    exports: [
        AppRoutingModule,
        HeaderComponent
    ],
    providers: [
        RecipeService, 
        DatabaseStorageService,
        AuthService
    ]
})
export class CoreModule{}