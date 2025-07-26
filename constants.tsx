import React from 'react';
import { EducationItem, ExperienceItem, ProjectItem, AchievementItem, Skill } from './types';

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'B.Tech. Electronics and Electrical Engineering',
    institute: 'Indian Institute of Technology, Guwahati',
    grade: '6.97/10.0 CGPA',
    year: '2020 - 2024',
  },
  {
    degree: 'Senior Secondary (XII)',
    institute: 'CBSE Board',
    grade: '83.6%',
    year: '2019',
  },
  {
    degree: 'Secondary (X)',
    institute: 'CBSE Board',
    grade: '10.0 CGPA',
    year: '2016',
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: 'Deep Learning Intern',
    company: 'Indian Institute of Technology, Guwahati',
    duration: 'Nov 2023 - Jan 2024',
    points: [
      'Designed CNN-BiLSTM model for robotic loop closure detection, achieving 92.5% accuracy.',
      'Improved state-of-the-art methods by 12% accuracy on KITTI and TUM RGB-D datasets.',
      'Implemented dynamic object handling reducing false positives by 22% in real-time applications.',
    ],
    skills: ['PyTorch', 'Computer Vision', 'SLAM', 'Deep Learning'],
  },
  {
    role: 'Algorithm Designer',
    company: 'Indian Institute of Technology, Guwahati',
    duration: 'Aug 2022 - Nov 2022',
    points: [
      'Designed optimization algorithm improving benchmark performance by 15-30% across 5 standard problems.',
      'Optimized production planning MATLAB models, reducing operational costs by 15% for a manufacturing case study.',
      'Co-authored publication in "Recent Advances in Algorithms for Swarm Systems 2024" (DOI Link).',
    ],
    skills: ['Algorithms', 'MATLAB', 'Optimization'],
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
    {
        title: 'Advanced Sorting Algorithm Visualizer',
        subtitle: 'React-based educational tool',
        duration: 'July 2023 - Aug 2023',
        points: [
            'Engineered visualization for 4+ sorting algorithms (Bubble, Merge, Quick, Heap).',
            'Implemented real-time metrics tracking (comparisons/swaps/time complexity).',
            'Enhanced user experience with pause/resume/reset controls (500+ monthly users).',
        ],
        demoUrl: '#',
    },
    {
        title: 'Pathfinding Algorithm Visualizer',
        subtitle: 'Interactive educational demonstrator',
        duration: 'Aug 2023',
        points: [
            'Developed interactive grid for BFS/DFS/Dijkstra/A* pathfinding algorithms.',
            'Optimized rendering for grids up to 100x100 using React memoization.',
            'Reduced path computation time by 40% through algorithm optimization.',
        ],
        demoUrl: '#',
    }
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    text: 'Global Undergraduate Awards 2024',
    details: '"Highly Commended Entrant in Computer Science" (Top 10% of submissions)',
    linkText: 'Award Link',
    linkUrl: '#',
  },
  {
    text: 'LeetCode',
    details: 'Max. rating 2039 (Top 1%), Rank 194/23,810 (Weekly), Rank 72/21,837 (Biweekly)',
    linkText: 'Profile',
    linkUrl: '#',
  },
  {
    text: 'CodeChef',
    details: 'Max. rating 1660 (3-star)',
    linkText: 'Profile',
    linkUrl: '#',
  },
  {
    text: 'JEE Mains 2020',
    details: '99.37 percentile among 1.2 million candidates',
    linkText: '2020',
  },
  {
    text: 'JEE Advanced 2020',
    details: '96.38 percentile among 160,000 candidates',
    linkText: '2020',
  },
];


export const TECHNICAL_SKILLS: Skill[] = [
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'C/C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-original.svg' },
  { name: 'PyTorch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'MATLAB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg' },
  { name: 'Jupyter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg' },
  { name: 'macOS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg' },
  { name: 'Windows', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg' },
];

export const KEY_COURSES: string[] = [
    'Deep Learning',
    'Data Structures & Algorithms',
    'Computer-Aided Optimization',
    'Probability & Random Processes',
    'Computer Vision',
    'Linear Algebra',
    'Real & Complex Analysis'
];
