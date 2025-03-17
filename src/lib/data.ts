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
  { day: "S", tasks: 2, average: 1.6 },
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
  },
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
    { number: 1, description: 'Understanding the tools in Figma' },
    { number: 2, description: 'Understand the basics of making designs' },
    { number: 3, description: 'Design a mobile application with figma' },
  ],
};

export const runningTaskStats = {
  totalTasks: 100,
  completedTasks: 65,
  progressPercentage: 45
};