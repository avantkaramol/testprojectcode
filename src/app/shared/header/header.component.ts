import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AuthService } from '../../auth/auth.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges {

	@Input() isResult:boolean;
	@Input() searchName: string;
	@Input() error?:string;
  constructor(public auth: AuthService) { }

  ngOnInit() {
  	//console.log(this.isResult);
  }

  ngOnChanges(changes: SimpleChanges){
  	if(changes.isResult && changes.isResult.previousValue != changes.isResult.currentValue){
  		this.isResult = changes.isResult.currentValue;
  	}
  }

}
