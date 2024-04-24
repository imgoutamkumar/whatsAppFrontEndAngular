import { Injectable } from '@angular/core';
import { Socket, SocketIoConfig } from 'ngx-socket-io';
import { Observable } from 'rxjs';
//const config: SocketIoConfig = { url: 'http://localhost:3300', options: {} };
@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(private socket: Socket) {}

  sendMessage(message: string): Observable<any> {
    return this.socket.emit('message', message);
  }
  /* captureWelcome() {
    this.io.on('welcome', (s: any) => {
      console.log(s);
    });
  } */

  getMessage() {}
}
