import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BibleAPIService {

  // BR
  // https://bible-api.com/?random=verse&translation=almeida
  // random english:
  // https://bible-api.com/?random=verse


  constructor(private http: HttpClient) { }


  /**
   *
   * @param translate Boolean indicating if the verse should be translated to portuguese
   * @returns Observable<BibleAPIService>
   */
  public getRandomVerse(translate?: boolean): Observable<BibleAPIService> {
    return this.http.get<BibleAPIService>(`https://bible-api.com/?random=verse${translate ? '&translation=almeida' : ''}`);
  }
}
