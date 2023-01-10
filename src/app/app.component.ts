import { Component, OnInit } from '@angular/core';
import Echo from 'laravel-echo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'websockets';

  ngOnInit(): void{
    console.log('Starting');
    this.websockets();
  }

  websockets(){
    const echo = new Echo({
      broadcaster: 'pusher',
      cluster: 'mt1',
      key: 'RCA090698',
      wsHost: window.location.hostname,
      wsPort: 6001,
      forceTLS: false,
      disableStats: true,
      enabledTransports: ['ws']
    });

    echo.channel('channel-message').listen('MessageEvent', (resp:any) => {
      console.log(resp);
      this.title = resp.message;
    });

  }

}
