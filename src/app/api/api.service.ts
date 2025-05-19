import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
  export class ApiService {
  constructor(private http: HttpClient) { }

    private apiUrl = 'https://api.worldbank.org/v2/country/';

  //////////////////////////////////////////////////////////
  // DONE!!! Get the following properties for each country //
  ////  1. country name             ///////////////////////
    //  2. country capital          //
    //  3. country region           //  
    //  4. income level             //
    //  5. longitude                //
    //  6. latitude                 //
    //////////////////////////////////

    apiCall(id: string): Observable<any> {

        
        return this.http.get<any>(this.apiUrl + id + "?format=json"); //Runs Api call to get country data based on id
         
    }


  }

