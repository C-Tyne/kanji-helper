import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KanjiModelService {
  
  kanjiData: any;

  constructor (private http: HttpClient) { }

  getKanjiJSON(): Observable<any> {
    return this.http.get<any>('assets/kanji-list.json');
  }
}
