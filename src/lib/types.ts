export interface TeamMember {
  name: string;
  avatar: string;
}

export interface Mentor {
  id: string;
  name: string;
  role: string;
  taskCount: number;
  rating: number;
  reviews: number;
  followed: boolean;
  image: string;
  description: string;
}

export interface Task {
  id: string;
  title: string;
  role: string;
  progress: number;
  daysLeft: number;
  timeLeft?: string;
  image: string;
  teamMembers: TeamMember[];
  steps?: TaskStep[];
}

export interface TaskStep {
  number: number;
  description: string;
  completed?: boolean;
}

export interface ChartDataPoint {
  day: string;
  tasks: number;
  average: number;
}

export interface SectionHeaderProps {
  title: string;
  hasNavigation?: boolean;
  onPrevious?: () => void;
  onNext?: () => void;
  disablePrevious?: boolean;
  disableNext?: boolean;
  rightContent?: React.ReactNode;
}

export interface ProgressBarProps {
  progress: number;
  showLabel?: boolean;
  height?: 'sm' | 'md';
  className?: string;
}

export interface AvatarProps {
  src?: string;
  alt?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' ;
  className?: string;
}

export interface AvatarStackProps {
  members: TeamMember[] | undefined;
  maxAvatars?: number;
  size?: 'xs' | 'sm' | 'md';
}

export interface IconButtonProps {
  icon: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  ariaLabel?: string;
  className?: string;
}

export interface MentorSectionProps {
  title: string;
  carousel: {
    handlePrevious: () => void;
    handleNext: () => void;
    isFirstPage: boolean;
    isLastPage: boolean;
    visibleItems: <T>(items: T[]) => T[];
  };
  gridClasses: string;
  isDetailed: boolean;
  data: Mentor[];
}

export type TaskType = {
  teamMembers: TeamMember[];
  id: string;
  title: string;
  role: string;
  progress: number;
  daysLeft: number;
  image: string;
}