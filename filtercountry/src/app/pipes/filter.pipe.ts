import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {

    transform(country: any[], id: string, name: string): any {
        if (!id && !name) {
            return country;
        }
        else {
            if (id) {
                country = country.filter(x => {
                    return x.id.toString().indexOf(id) != -1;
                })
            }
            if (name) {
                country = country.filter(x => {
                    return x.name.toLowerCase().indexOf(name.toLowerCase()) != -1;
                })
            }
            if (status) {
                country = country.filter(x => {
                    return x.status.toString().indexOf(status) != -1;
                })
            }
            return country;
        }
    }

}
