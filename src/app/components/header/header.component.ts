import { Component} from '@angular/core';
import { DatabaseStorageService } from '../shared/data-storage.service';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

    constructor(private dsService: DatabaseStorageService) {}

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


}
