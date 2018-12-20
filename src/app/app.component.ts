import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    loadedFeature = 'recipe';

    ngOnInit(){
       firebase.initializeApp({
        apiKey: "AIzaSyAwNY4jH_TnH55b73dj4ESnce3u7WzuMWQ",
        authDomain: "recipe-book-c169f.firebaseapp.com"
       }) 
    }

  onNavigate(feature: string){
    this.loadedFeature = feature;
  }
}
