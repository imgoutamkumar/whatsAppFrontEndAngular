import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  @Input() contentObj: any;
  @Output() communityEvent = new EventEmitter();
  @Output() chatEvent = new EventEmitter();
  @Output() chatData = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  isclick: boolean = false;
  iscommunity: boolean = false;

  openChat(data: any) {
    /* this.isclick = true; */
    this.chatData.emit(data);
  }
  OpenCommunityBar() {
    this.communityEvent.emit();
  }
  OpenDonut() {
    this.communityEvent.emit();
  }
  OpenChatBar() {
    console.log('chat icon clicked');
    this.chatEvent.emit();
  }
}
