import { Injectable } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Injectable({ providedIn: 'root' })
export class MychartsService {

  constructor(private http: _HttpClient) { }

}
