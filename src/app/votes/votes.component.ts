import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {

  @Input('like') like = 0;
  @Input('deslike') deslike = 0;

  @Output('onChangeVotes') inChangeVotes = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addlike(){
    this.like ++ ;
    this.inChangeVotes.emit({type: 0, data: this.like});
  }
  addDeslike() {
    this.deslike ++ ;
    this.inChangeVotes.emit({type: 1, data: this.deslike});
  }


}
