import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  ngOnInit(): void {}

  @ViewChild('sidenav') sidenav: MatSidenav;
  @ViewChild('chatBar') chatbar: MatSidenav;
  ngAfterViewInit(): void {}
  reason = '';

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

  sidenavBarCalling() {
    //alert('hello world');
    this.sidenav.open();
  }
  chatBarCalling() {
    this.chatbar.open();
  }
  conversationData: any;
  profileclicked: boolean = false;
  chatConversation(event: any) {
    if (event != null) {
      this.profileclicked = true;
    }

    this.conversationData = this.conversation.find(
      (obj) => obj.id === event.id
    );
  }

  conversation = [
    {
      id: 1,
      name: 'Rob',
      profile_pic:
        'https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      time: '6:30pm',
      latestMessage: 'Ok Thanks.',
      messages: [
        {
          id: 1,
          body: 'Hi, I’m Anna. Are you enjoying the party?',
          time: '6:35pm',
        },
        {
          id: 2,
          body: 'Yeah, it’s been great! Are you enjoying it too?',
          time: '6:36pm',
        },
        {
          id: 3,
          body: 'What was the most number of people you have ever met during a single party?',
          time: '6:36pm',
        },
        {
          id: 4,
          body: '120',
          time: '10:35pm',
        },
        {
          id: 5,
          body: 'Good Morning',
          time: '6:36am',
        },
        {
          id: 6,
          body: 'Chech the update details again',
          time: '7:03am',
        },
        {
          id: 7,
          body: 'Good Morning',
          time: '6:36am',
        },
        {
          id: 8,
          body: 'Chech the update details again',
          time: '7:03am',
        },
        {
          id: 9,
          body: 'Chech the update details again',
          time: '7:03am',
        },
        {
          id: 10,
          body: 'Good Morning',
          time: '6:36am',
        },
        {
          id: 11,
          body: 'Chech the update details again',
          time: '7:03am',
        },
      ],
    },
    {
      id: 2,
      name: 'Rahul',
      profile_pic:
        'https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      time: '9:30am',
      latestMessage: 'Good Morning',
      message: [
        {
          id: 1,
          body: 'Good Night',
          time: '10:35pm',
        },
        {
          id: 2,
          body: 'Good Morning',
          time: '6:36am',
        },
        {
          id: 3,
          body: 'Chech the update details again',
          time: '7:03am',
        },
      ],
    },
    {
      id: 3,
      name: 'Rahul',
      profile_pic:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      time: '9:30am',
      latestMessage: 'Good Morning',
      message: [
        {
          id: 1,
          body: 'Good Night',
          time: '10:35pm',
        },
        {
          id: 2,
          body: 'Good Morning',
          time: '6:36am',
        },
        {
          id: 3,
          body: 'Chech the update details again',
          time: '7:03am',
        },
      ],
    },
    {
      id: 4,
      name: 'Rahul',
      profile_pic:
        'https://images.pexels.com/photos/8047167/pexels-photo-8047167.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      time: '9:30am',
      latestMessage: 'Good Morning',
      message: [
        {
          id: 1,
          body: 'Good Night',
          time: '10:35pm',
        },
        {
          id: 2,
          body: 'Good Morning',
          time: '6:36am',
        },
        {
          id: 3,
          body: 'Chech the update details again',
          time: '7:03am',
        },
      ],
    },
    {
      id: 5,
      name: 'Rahul',
      profile_pic:
        'https://plus.unsplash.com/premium_photo-1668895511243-641f5db8dbd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      time: '9:30am',
      latestMessage: 'Good Morning',
      message: [
        {
          id: 1,
          body: 'Good Night',
          time: '10:35pm',
        },
        {
          id: 2,
          body: 'Good Morning',
          time: '6:36am',
        },
        {
          id: 3,
          body: 'Chech the update details again',
          time: '7:03am',
        },
      ],
    },
    {
      id: 6,
      name: 'Rahul',
      profile_pic:
        'https://images.unsplash.com/photo-1594672830234-ba4cfe1202dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBvcnRyYWl0JTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      time: '9:30am',
      latestMessage: 'Good Morning',
      message: [
        {
          id: 1,
          body: 'Good Night',
          time: '10:35pm',
        },
        {
          id: 2,
          body: 'Good Morning',
          time: '6:36am',
        },
        {
          id: 3,
          body: 'Chech the update details again',
          time: '7:03am',
        },
      ],
    },
    {
      id: 7,
      name: 'Rahul',
      profile_pic:
        'https://images.unsplash.com/photo-1594672830234-ba4cfe1202dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBvcnRyYWl0JTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      time: '9:30am',
      latestMessage: 'Good Morning',
      message: [
        {
          id: 1,
          body: 'Good Night',
          time: '10:35pm',
        },
        {
          id: 2,
          body: 'Good Morning',
          time: '6:36am',
        },
        {
          id: 3,
          body: 'Chech the update details again',
          time: '7:03am',
        },
      ],
    },
    {
      id: 8,
      name: 'Rahul',
      profile_pic:
        'https://images.unsplash.com/photo-1594672830234-ba4cfe1202dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBvcnRyYWl0JTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      time: '9:30am',
      latestMessage: 'Good Morning',
      message: [
        {
          id: 1,
          body: 'Good Night',
          time: '10:35pm',
        },
        {
          id: 2,
          body: 'Good Morning',
          time: '6:36am',
        },
        {
          id: 3,
          body: 'Chech the update details again',
          time: '7:03am',
        },
      ],
    },
    {
      id: 9,
      name: 'Rahul',
      profile_pic:
        'https://images.unsplash.com/photo-1594672830234-ba4cfe1202dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBvcnRyYWl0JTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      time: '9:30am',
      latestMessage: 'Good Morning',
      message: [
        {
          id: 1,
          body: 'Good Night',
          time: '10:35pm',
        },
        {
          id: 2,
          body: 'Good Morning',
          time: '6:36am',
        },
        {
          id: 3,
          body: 'Chech the update details again',
          time: '7:03am',
        },
      ],
    },
    {
      id: 10,
      name: 'Rahul',
      profile_pic:
        'https://images.unsplash.com/photo-1594672830234-ba4cfe1202dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBvcnRyYWl0JTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      time: '9:30am',
      latestMessage: 'Good Morning',
      message: [
        {
          id: 1,
          body: 'Good Night',
          time: '10:35pm',
        },
        {
          id: 2,
          body: 'Good Morning',
          time: '6:36am',
        },
        {
          id: 3,
          body: 'Chech the update details again',
          time: '7:03am',
        },
      ],
    },
  ];
}
