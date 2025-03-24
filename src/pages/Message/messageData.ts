import avatar3 from "../../assets/avatar1.png";
import avatar1 from "../../assets/avatar2.png";
import avatar2 from "../../assets/avatar3.png";

export const dummyConversations = [
  {
    id: 1,
    sender: {
      name: "Alice Johnson",
      avatar: avatar1,
    },
    receiver: {
      name: "Bob Smith",
      avatar: avatar2,
    },
    messages: [
      { text: "Hey Bob, how's it going?", timestamp: "2023-10-01T09:00:00Z", from: "sender" },
      { text: "Hi Alice! I'm good, thanks. How about you?", timestamp: "2023-10-01T09:02:00Z", from: "receiver" },
      { text: "I'm doing great! Just finished my morning workout.", timestamp: "2023-10-01T09:05:00Z", from: "sender" },
    ],
  },
  {
    id: 2,
    sender: {
      name: "Charlie Brown",
      avatar: avatar2,
    },
    receiver: {
      name: "Diana Prince",
      avatar: avatar3,
    },
    messages: [
      { text: "Hey Diana, are we still on for lunch?", timestamp: "2023-10-01T10:00:00Z", from: "sender" },
      { text: "Yes, absolutely! I'll meet you at the café.", timestamp: "2023-10-01T10:02:00Z", from: "receiver" },
    ],
  },
  {
    id: 3,
    sender: {
      name: "Ethan Hunt",
      avatar: avatar1,
    },
    receiver: {
      name: "Fiona Gallagher",
      avatar: avatar3,
    },
    messages: [
      { text: "Fiona, did you get the documents I sent?", timestamp: "2023-10-01T11:00:00Z", from: "sender" },
      { text: "Yes, I got them.  looks good.", timestamp: "2023-10-01T11:05:00Z", from: "receiver" },
    ],
  },
  {
    id: 4,
    sender: {
      name: "Grace Lee",
      avatar: avatar2,
    },
    receiver: {
      name: "Henry Mills",
      avatar: avatar1,
    },
    messages: [
      { text: "Henry, can you send me the project update?", timestamp: "2023-10-01T12:00:00Z", from: "sender" },
      { text: "Sure thing, Grace. I'll email it to you shortly.", timestamp: "2023-10-01T12:05:00Z", from: "receiver" },
    ],
  },
  {
    id: 5,
    sender: {
      name: "Ivy Valentine",
      avatar: avatar3,
    },
    receiver: {
      name: "Jack Sparrow",
      avatar: avatar2,
    },
    messages: [
      { text: "Jack, where are you? We're waiting for you at the dock!", timestamp: "2023-10-01T13:00:00Z", from: "sender" },
      { text: "Relax, Ivy. I'll be there in 10 minutes.", timestamp: "2023-10-01T13:05:00Z", from: "receiver" },
    ],
  },
];