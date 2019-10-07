import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public newEmail: string = '';
    public Email: any[] = [];

    addEmail(){
        this.Email.unshift({
            id: this.Email.length + 1,
            email: this.newEmail
        })
        this.newEmail = '';
    }
    removeEmail(id: number){
        const index =  this.Email.findIndex(e => e.id === id);
        this.Email.splice(index,1);
    }    
}
