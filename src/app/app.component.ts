import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { svgComponent } from './svg/svg.component';
import { ApiService } from './api/api.service';
import { countryInfo } from './envioronemt';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, svgComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'

})

export class AppComponent {

    //Declared Variables
    title = 'mapProject';

    countryName = countryInfo.name;
    countryCapital = countryInfo.capitalCity;
    countryRegion = countryInfo.region;
    countryIncome = countryInfo.incomeLevel;
    countryLongitude = countryInfo.longitude;
    countryLatitude = countryInfo.latitude;


    constructor(private api: ApiService) {
    }

    ngOnInit() {
       
    }
    
 

    //Get selected country id
    public async addEventListeners(api: ApiService): Promise<void> {
        return new Promise((resolve) => { 
            document.getElementById("svg")      // Selects svg element on html page
     // gets clicked svg path from click event, loops through paths 
            onclick = function (event) {    
                let _targetPathId = event.target;
                let country;
                const paths = document.querySelectorAll("path");
                let i = 0;
                do {
                    country = paths[i]; //  gets country id from path and uses id to call API
                    if (_targetPathId == country) {
                        api.apiCall(paths[i].id).subscribe(data => {

                            console.warn("please work please work: ", data);
                            let test = data[1][0]; // gets data from array containing country info

                            //  Assigns data to corresponding variables
                            countryInfo.name = test.name;
                            countryInfo.capitalCity = test.capitalCity;
                            countryInfo.region = test.region.value;
                            countryInfo.incomeLevel = test.incomeLevel.value;
                            countryInfo.longitude = test.longitude;
                            countryInfo.latitude = test.latitude;


                            console.log(countryInfo.name);
                            resolve(); // Resolves promise
                        });
                        break;
                    }
                    i++;
                } while (i < paths.length)
            }
        });
        
    }

    // Updates html content variables
    public updateVariables() {

        this.countryName = countryInfo.name;
        this.countryCapital = countryInfo.capitalCity;
        this.countryRegion = countryInfo.region;
        this.countryIncome = countryInfo.incomeLevel;
        this.countryLongitude = countryInfo.longitude;
        this.countryLatitude = countryInfo.latitude;
    }

    // Called when user clicks
    async onClick() {


        //  Gets country Id from SVG then runs api call to get country data
        try {
            let test = await this.addEventListeners(this.api); // waits for promise to resolve
            console.log(countryInfo.name);
            console.log(this.countryName);
            this.updateVariables();                            // upodates after api call is complete
        } catch {
            console.log("error");
        }

   

    }
       
    }



    
    



  


