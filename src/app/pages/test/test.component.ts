import { Component } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent {
  constructor(private chatService: ChatService) {}

  message: string = '';
  messages: string[] = [];
  sendMessage() {
    console.log(this.message);
    this.chatService.sendMessage(this.message); /* .subscribe({
      next: (result) => {
        console.log(result);
      },
      error: (error) => {
        console.log(error);
      },
    }); */
    this.messages.push(this.message);
  }
}
