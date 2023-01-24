import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  name:any = "aniket"
  message = "";
  dataRecieved(msg:string){

    this.message = msg;
  }

}
