import { Component} from '@angular/core';
import { DatabaseStorageService } from '../../components/shared/data-storage.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

    constructor(
        private dsService: DatabaseStorageService,
        private authService: AuthService) {}

    isAuthenticated() {
        return this.authService.isAuthenticated();
    }

    onSaveData(){
        this.dsService.storeRecipes()
        .subscribe(
            (response: Response) =>{
                console.log(response);
            }
        );
    }

    onFetchData(){
        this.dsService.getRecipes();
    }


    onLogout(){
        this.authService.logout();
    }
}