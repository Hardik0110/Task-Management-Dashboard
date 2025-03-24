import { ButtonHTMLAttributes, ReactNode } from 'react';
import { TooltipProps } from "recharts";


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
  id: string | number;
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




export interface EnhancedTooltipProps extends TooltipProps<number | string | Array<number | string>, string> {
  suffix?: string;
  className?: string;
}

export interface ChartConfig {
  [key: string]: {
    label: string;
    color: string;
  }
}

export interface ChartContainerProps {
  config: ChartConfig;
  children: ReactNode;
}

export interface TaskSectionProps {
  title: string;
  tasks: TaskType[];
  cardsToShow: number;
}

export interface TaskPageProps {
  cardsToShow?: number;
}

export interface TaskDetailCardProps {
  id: string;
  title: string;
  role: string;
  progress: number;
  timeLeft: string;
  image: string;
  teamMembers?: TeamMember[];
  steps?: {
    number: number;
    description: string;
    completed: boolean;
  }[];
}

export interface HeaderProps {
  toggleSidebar?: () => void;
}

export interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export type ButtonVariant = 'primary' | 'outline' | 'radio' | 'icon' | 'tab';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children?: ReactNode;
  selected?: boolean;
  className?: string;
  icon?: ReactNode;
  ariaLabel?: string;
}

export interface MentorCardProps {
  mentor: {
    image: string;
    name: string;
    role: string;
    followed: boolean;
    description: string;
    taskCount: number;
    rating: number;
    reviews: number;
  };
  isDetailed?: boolean;
}

export type ChatHeaderProps = {
  user: {
    name: string;
    avatar: string;
  };
  onBackClick?: () => void;
};

export interface UpcomingTasksSectionProps {
  cardsToShow?: number;
}