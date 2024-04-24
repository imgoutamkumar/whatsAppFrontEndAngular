import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss'],
})
export class ChatBoxComponent implements OnChanges {
  @Input() conversationObj: any;
  @Input() isChatProfileClicked: boolean;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('onChange : ', changes);
    console.log(this.conversationObj);
  }
}
