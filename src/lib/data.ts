import { ChartDataPoint, Mentor, Task } from './types';
import avatar1 from '/src/assets/avatar1.png';
import avatar2 from '/src/assets/avatar2.png';
import avatar3 from '/src/assets/avatar3.png';
import Image1 from '/src/assets/Image1.png';
import Image2 from '/src/assets/Image2.png';
import Image3 from '/src/assets/Image3.png';

export const activityChartData: ChartDataPoint[] = [
  { day: "S", tasks: 1, average: 2.8 },
  { day: "M", tasks: 2, average: 1.5 },
  { day: "T", tasks: 1, average: 1.2 },
  { day: "W", tasks: 2, average: 2.5 },
  { day: "T", tasks: 3, average: 1.7 },
  { day: "F", tasks: 2, average: 2.5 },
  { day: "S", tasks: 0, average: 1.6 },
];

export const mentors: Mentor[] = [
  {
    id: '1',
    name: 'Curious George',
    role: 'UI/UX Design',
    taskCount: 40,
    rating: 4.7,
    reviews: 750,
    followed: false,
    image: avatar1,
    description: 'The description of the mentor... , and I dont know what else to write here ',
  },
  {
    id: '2',
    name: 'Abraham Lincoln',
    role: '3D Design',
    taskCount: 32,
    rating: 4.9,
    reviews: 810,
    followed: false,
    image: avatar2,
    description: 'The description of the second mentor... , Writing this just to make the description longer',
  },
  {
    id: '3',
    name: 'Abraham Lincoln',
    role: '3D Design',
    taskCount: 32,
    rating: 4.9,
    reviews: 810,
    followed: false,
    image: avatar2,
    description: 'The description of the third mentor... , Writing this just to make the description longer',
  },
  {
    id: '4',
    name: 'Abraham Lincoln',
    role: '3D Design',
    taskCount: 32,
    rating: 4.9,
    reviews: 810,
    followed: false,
    image: avatar1,
    description: 'The description of the foourth mentor... , Writing this just to make the description longer'
  },
  {
    id: '5',
    name: 'Jessica Jane',
    role: 'Web Developer',
    taskCount: 40,
    rating: 4.7,
    reviews: 750,
    followed: false,
    image: '/src/assets/avatar1.png',
    description: "Hi, I'm Jessica Jane. I am a doctoral student at Harvard University majoring in Web..."
  },
  {
    id: '6',
    name: 'Alex Stanton',
    role: 'UI/UX Designer',
    taskCount: 60,
    rating: 4.9,
    reviews: 970,
    followed: true,
    image: '/src/assets/avatar2.png',
    description: "Hi, I'm Alex Stanton. I am a doctoral student at Oxford University majoring in UI/UX..."
  },
  {
    id: '7',
    name: 'Antoine Griezmann',
    role: 'Android Developer',
    taskCount: 50,
    rating: 4.8,
    reviews: 830,
    followed: false,
    image: '/src/assets/avatar3.png',
    description: "Hi, I'm Antoine Griezmann. I'm an Android Developer at Google company..."
  },
  {
    id: '8',
    name: 'Anna White',
    role: '3D Design',
    taskCount: 60,
    rating: 4.8,
    reviews: 870,
    followed: true,
    image: '/src/assets/avatar1.png',
    description: "Hi, I'm Anna White. I'm a professional 3D Designer at Blender company..."
  },
  {
    id: '9',
    name: 'Richard Kyle',
    role: '2D Design',
    taskCount: 60,
    rating: 4.7,
    reviews: 730,
    followed: false,
    image: '/src/assets/avatar2.png',
    description: "Hi, I'm Richard Kyle. I'm a professional 2D Designer at Photoshop company..."
  },
  {
    id: '10',
    name: 'Julia Philips',
    role: 'iOS Developer',
    taskCount: 60,
    rating: 4.9,
    reviews: 910,
    followed: false,
    image: '/src/assets/avatar3.png',
    description: "Hi, I'm Julia Philips. I'm a senior manager at Apple company..."
  }
];

export const upcomingTasks: Task[] = [
  {
    id: '1',
    title: 'Creating Mobile App Design',
    role: 'UI/UX Designer',
    progress: 75,
    daysLeft: 3,
    image: Image2,
    teamMembers: [
      { name: 'Alex Johnson', avatar: avatar1 },
      { name: 'Sarah Miller', avatar: avatar2 },
      { name: 'Mike Chen', avatar: avatar3 },
    ],
  },
  {
    id: '2',
    title: 'Creating Perfect Website',
    role: 'Web Designer',
    progress: 85,
    daysLeft: 4,
    image: Image3,
    teamMembers: [
      { name: 'Emily Wilson', avatar: avatar1 },
      { name: 'David Lee', avatar: avatar2 },
      { name: 'Jessica Taylor', avatar: avatar3 },
      { name: 'Ryan Brown', avatar: avatar2 },
    ],
  },
  {
    id: '3',
    title: 'Backend Architecture',
    role: 'Senior Developer',
    progress: 65,
    daysLeft: 5,
    image: Image1,
    teamMembers: [
      { name: 'John Smith', avatar: avatar3 },
      { name: 'Melissa Brown', avatar: avatar1 },
      { name: 'Robert Johnson', avatar: avatar2 },
    ],
  },
  {
    id: '4',
    title: 'Data Analysis Project',
    role: 'Data Scientist',
    progress: 40,
    daysLeft: 7,
    image: Image2,
    teamMembers: [
      { name: 'Jennifer Lee', avatar: avatar2 },
      { name: 'Michael Scott', avatar: avatar3 },
    ],
  },
  {
    id: '5',
    title: 'Brand Redesign',
    role: 'Art Director',
    progress: 90,
    daysLeft: 2,
    image: Image3,
    teamMembers: [
      { name: 'Claire Wilson', avatar: avatar1 },
      { name: 'James Taylor', avatar: avatar2 },
      { name: 'Sophia Garcia', avatar: avatar3 },
    ],
  }
];

export const taskToday: Task = {
  id: 'today-1',
  title: 'Creating Awesome Mobile Apps',
  role: 'UI/UX Designer',
  progress: 90,
  daysLeft: 0,
  timeLeft: '1 Hour',
  image: Image1,
  teamMembers: [
    { name: 'Alex Johnson', avatar: avatar1 },
    { name: 'Sarah Miller', avatar: avatar2 },
    { name: 'Mike Chen', avatar: avatar3 },
    { name: 'Emily Wilson', avatar: avatar2 },
  ],
  steps: [
    { number: 1, description: 'Understanding the tools in Figma', completed: true },
    { number: 2, description: 'Understand the basics of making designs', completed: true },
    { number: 3, description: 'Design a mobile application with figma', completed: false },
  ],
};

export const runningTaskStats = {
  totalTasks: 100,
  completedTasks: 65,
  progressPercentage: 45
};