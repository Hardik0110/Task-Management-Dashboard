import avatar1 from '@/assets/avatar1.png';
import avatar2 from '@/assets/avatar2.png';
import avatar3 from '@/assets/avatar3.png';
import Image1 from '@/assets/Image1.png';


export interface User {
  id: string;
  name: string;
  avatar: string;
  status: 'online' | 'offline';
}

export interface Message {
  text: string;
  timestamp: string;
  from: 'sender' | 'receiver';
  image?: string;
}

export interface Conversation {
  id: string;
  sender: User;
  receiver: User;
  messages: Message[];
}

export const dummyConversations: Conversation[] = [
  {
    id: 'conv_alice_bob',
    sender: {
      id: 'user_alice',
      name: "Alice Johnson",
      avatar: avatar1,
      status: 'online',
      image: Image1
    },
    receiver: {
      id: 'user_bob',
      name: "Bob Smith",
      avatar: avatar2,
      status: 'offline'
    },
    messages: [
      { text: "Hey Bob, how's it going?", timestamp: "2023-10-01T09:00:00Z", from: "sender" },
      { text: "Hi Alice! I'm good, thanks. How about you?", timestamp: "2023-10-01T09:02:00Z", from: "receiver" },
      { text: "I'm doing great! Just finished my morning workout.", timestamp: "2023-10-01T09:05:00Z", from: "sender" },
    ],
  },
  {
    id: 'conv_charlie_diana',
    sender: {
      id: 'user_charlie',
      name: "Charlie Brown",
      avatar: avatar3,
      status: 'online'
    },
    receiver: {
      id: 'user_diana',
      name: "Diana Prince",
      avatar: avatar1,
      status: 'online'
    },
    messages: [
      { text: "Hey Diana, are we still on for lunch?", timestamp: "2023-10-01T10:00:00Z", from: "sender" },
      { text: "Yes, absolutely! I'll meet you at the café.", timestamp: "2023-10-01T10:02:00Z", from: "receiver" },
    ],
  },
  {
    id: 'conv_ethan_fiona',
    sender: {
      id: 'user_ethan',
      name: "Ethan Hunt",
      avatar: avatar2,
      status: 'offline'
    },
    receiver: {
      id: 'user_fiona',
      name: "Fiona Gallagher",
      avatar: avatar3,
      status: 'online'
    },
    messages: [
      { text: "Fiona, did you get the documents I sent?", timestamp: "2023-10-01T11:00:00Z", from: "sender" },
      { text: "Yes, I got them. Everything looks good.", timestamp: "2023-10-01T11:05:00Z", from: "receiver" },
    ],
  },
  {
    id: 'conv_grace_henry',
    sender: {
      id: 'user_grace',
      name: "Grace Lee",
      avatar: avatar1,
      status: 'online'
    },
    receiver: {
      id: 'user_henry',
      name: "Henry Mills",
      avatar: avatar2,
      status: 'offline'
    },
    messages: [
      { text: "Henry, can you send me the project update?", timestamp: "2023-10-01T12:00:00Z", from: "sender" },
      { text: "Sure thing, Grace. I'll email it to you shortly.", timestamp: "2023-10-01T12:05:00Z", from: "receiver" },
    ],
  },
  {
    id: 'conv_ivy_jack',
    sender: {
      id: 'user_ivy',
      name: "Ivy Valentine",
      avatar: avatar3,
      status: 'online'
    },
    receiver: {
      id: 'user_jack',
      name: "Jack Sparrow",
      avatar: avatar1,
      status: 'offline'
    },
    messages: [
      { text: "Jack, where are you? We're waiting for you at the dock!", timestamp: "2023-10-01T13:00:00Z", from: "sender" },
      { text: "Relax, Ivy. I'll be there in 10 minutes.", timestamp: "2023-10-01T13:05:00Z", from: "receiver" },
    ],
  },
  {
    id: 'conv_karen_leo',
    sender: {
      id: 'user_karen',
      name: "Karen Page",
      avatar: avatar2,
      status: 'offline'
    },
    receiver: {
      id: 'user_leo',
      name: "Leo Fitz",
      avatar: avatar3,
      status: 'online'
    },
    messages: [
      { text: "Leo, have you seen the latest report?", timestamp: "2023-10-01T14:00:00Z", from: "sender" },
      { text: "Not yet, Karen. I'll check it out now.", timestamp: "2023-10-01T14:05:00Z", from: "receiver" },
    ],
  },
  {
    id: 'conv_mia_noah',
    sender: {
      id: 'user_mia',
      name: "Mia Wallace",
      avatar: avatar1,
      status: 'online'
    },
    receiver: {
      id: 'user_noah',
      name: "Noah Bennet",
      avatar: avatar2,
      status: 'offline'
    },
    messages: [
      { text: "Noah, do you have plans for the weekend?", timestamp: "2023-10-01T15:00:00Z", from: "sender" },
      { text: "Not really, Mia. What's up?", timestamp: "2023-10-01T15:05:00Z", from: "receiver" },
    ],
  },
  {
    id: 'conv_olivia_peter',
    sender: {
      id: 'user_olivia',
      name: "Olivia Dunham",
      avatar: avatar3,
      status: 'online'
    },
    receiver: {
      id: 'user_peter',
      name: "Peter Bishop",
      avatar: avatar1,
      status: 'offline'
    },
    messages: [
      { text: "Peter, remember to bring the files tomorrow.", timestamp: "2023-10-01T16:00:00Z", from: "sender" },
      { text: "Got it, Olivia. Will do.", timestamp: "2023-10-01T16:05:00Z", from: "receiver" },
    ],
  },
  {
    id: 'conv_quinn_rachel',
    sender: {
      id: 'user_quinn',
      name: "Quinn Fabray",
      avatar: avatar2,
      status: 'offline'
    },
    receiver: {
      id: 'user_rachel',
      name: "Rachel Berry",
      avatar: avatar3,
      status: 'online'
    },
    messages: [
      { text: "Rachel, let's practice the song tonight.", timestamp: "2023-10-01T17:00:00Z", from: "sender" },
      { text: "Sounds good, Quinn. My place at 8?", timestamp: "2023-10-01T17:05:00Z", from: "receiver" },
    ],
  },
  {
    id: 'conv_sophia_tom',
    sender: {
      id: 'user_sophia',
      name: "Sophia Martinez",
      avatar: avatar1,
      status: 'online'
    },
    receiver: {
      id: 'user_tom',
      name: "Tom Hanks",
      avatar: avatar2,
      status: 'offline'
    },
    messages: [
      { text: "Tom, did you watch the game last night?", timestamp: "2023-10-01T18:00:00Z", from: "sender" },
      { text: "Yeah, Sophia. It was intense!", timestamp: "2023-10-01T18:05:00Z", from: "receiver" },
    ],
  },
];