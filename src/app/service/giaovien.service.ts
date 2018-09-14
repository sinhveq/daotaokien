import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Giaovien} from '../model/giaovien';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GiaovienService {
  constructor( 
    private http: HttpClient 
  ) { }

  getDataGV():Observable<Giaovien[]>{
    return this.http.get<Giaovien[]>(environment.gvUrl);
  }
}
