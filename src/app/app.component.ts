import { Component, OnInit } from '@angular/core';
import { BibleAPIService } from 'src/service/bible-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private bibleService: BibleAPIService){
  }

  ngOnInit(): void {
      // todo: get EN or BR
    this.getRandomVerse();
  }

  getRandomVerse(): void {
    this.bibleService.getRandomVerse().subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        window.alert("Ops! An error has occurred.")
        console.log(error);
      }
    })
  }

}
