import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, Output} from '@angular/core';

type NewType = any;

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() name:NewType;
   message = "hello";
   @Output() msgChanged=new EventEmitter<string>();

  
   SendData(){
    this.msgChanged.emit(this.message)
  


   }



}
