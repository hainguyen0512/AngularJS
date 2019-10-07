import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'filtercountry';

    public idFilter : string;
    public nameFilter : string;
    public country: any[] = [
        {
            id: 1,
            name: 'VietNam',
        },
        {
            id: 2,
            name: 'China',
        },
        {
            id: 3,
            name: 'England',
        },
        {
            id: 4,
            name: 'Campuchia',
        },
        {
            id: 5,
            name: 'American',
        },
        {
            id: 12,
            name: 'Rusian ',
        },
        {
            id: 51,
            name: 'Brazil',
        },
        {
            id: 9,
            name: 'South Korea'
        },
        {
            id: 10,
            name: 'North Korea'
        },
        {
            id: 11,
            name: 'Japan'
        }
    ]
}
