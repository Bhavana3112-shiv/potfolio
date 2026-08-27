import { Injectable } from '@angular/core';
import {
  AiCloudNode,
  ArchitectureConnection,
  ArchitectureNode,
  ExperienceItem,
  ExpertiseCard,
  HighlightItem,
  NavItem,
  Project,
  ProcessStep,
  SkillCategory,
  SocialLink,
  StatTile,
} from '../models/portfolio.models';

@Injectable({ providedIn: 'root' })
export class PortfolioDataService {
  readonly name = 'Bhavana';
  readonly role = 'Lead Full-Stack Engineer';

  readonly navItems: NavItem[] = [
    { label: 'Home', anchor: 'home' },
    { label: 'About', anchor: 'about' },
    { label: 'Skills', anchor: 'skills' },
    { label: 'Experience', anchor: 'experience' },
    { label: 'Projects', anchor: 'projects' },
    { label: 'Architecture', anchor: 'architecture' },
    { label: 'Contact', anchor: 'contact' },
  ];

  readonly socialLinks: SocialLink[] = [
    { label: 'GitHub', href: 'https://github.com/yourusername', icon: 'github' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/yourusername', icon: 'linkedin' },
    { label: 'Email', href: 'mailto:your.email@example.com', icon: 'mail' },
  ];

  readonly heroTechFlow: string[] = ['Angular', 'Node.js', 'MongoDB', 'AWS', 'AI'];

  readonly aboutHighlights: HighlightItem[] = [
    { label: 'Full-stack development', icon: 'layers' },
    { label: 'Frontend architecture', icon: 'component' },
    { label: 'Backend API development', icon: 'server' },
    { label: 'Cloud architecture', icon: 'cloud' },
    { label: 'Microservices', icon: 'grid' },
    { label: 'Database design', icon: 'database' },
    { label: 'AI integration', icon: 'cpu' },
    { label: 'Performance optimization', icon: 'zap' },
    { label: 'Security', icon: 'shield' },
    { label: 'CI/CD', icon: 'git-branch' },
  ];

  readonly aboutStats: StatTile[] = [
    { value: '5+', label: 'Years Experience', icon: 'calendar', isCounter: true, numericTarget: 5, suffix: '+' },
    { value: 'Multiple', label: 'Production Applications', icon: 'box', isCounter: false },
    { value: 'Web + Mobile', label: 'Development', icon: 'smartphone', isCounter: false },
    { value: 'Cloud & Microservices', label: 'Architecture', icon: 'cloud', isCounter: false },
  ];

  readonly skillCategories: SkillCategory[] = [
    {
      key: 'frontend',
      title: 'Frontend',
      icon: 'monitor',
      skills: [
        { name: 'Angular', icon: 'angular' },
        { name: 'Ionic', icon: 'ionic' },
        { name: 'TypeScript', icon: 'typescript' },
        { name: 'JavaScript', icon: 'javascript' },
        { name: 'HTML5', icon: 'html5' },
        { name: 'CSS3', icon: 'css3' },
        { name: 'RxJS', icon: 'rxjs' },
        { name: 'Responsive Design', icon: 'layout' },
      ],
    },
    {
      key: 'backend',
      title: 'Backend',
      icon: 'server',
      skills: [
        { name: 'Node.js', icon: 'nodejs' },
        { name: 'Express.js', icon: 'express' },
        { name: 'REST APIs', icon: 'api' },
        { name: 'Microservices', icon: 'grid' },
        { name: 'Event-driven architecture', icon: 'activity' },
        { name: 'Authentication', icon: 'lock' },
        { name: 'Authorization', icon: 'key' },
        { name: 'JWT', icon: 'shield' },
      ],
    },
    {
      key: 'database',
      title: 'Database',
      icon: 'database',
      skills: [
        { name: 'MongoDB', icon: 'mongodb' },
        { name: 'Mongoose', icon: 'mongoose' },
        { name: 'Amazon DocumentDB', icon: 'aws' },
        { name: 'Aggregation Pipeline', icon: 'filter' },
        { name: 'Indexing', icon: 'list' },
        { name: 'Schema Design', icon: 'schema' },
      ],
    },
    {
      key: 'cloud',
      title: 'Cloud / AWS',
      icon: 'cloud',
      skills: [
        { name: 'AWS Lambda', icon: 'lambda' },
        { name: 'Amazon S3', icon: 's3' },
        { name: 'CloudFront', icon: 'cloudfront' },
        { name: 'Route 53', icon: 'route53' },
        { name: 'Cognito', icon: 'cognito' },
        { name: 'SQS', icon: 'sqs' },
        { name: 'AWS SAM', icon: 'sam' },
        { name: 'IAM', icon: 'iam' },
        { name: 'Textract', icon: 'textract' },
      ],
    },
    {
      key: 'ai',
      title: 'AI',
      icon: 'cpu',
      skills: [
        { name: 'Google Gemini', icon: 'gemini' },
        { name: 'Claude', icon: 'claude' },
        { name: 'AI-powered document processing', icon: 'file-text' },
        { name: 'OCR', icon: 'scan' },
        { name: 'AI evaluation workflows', icon: 'check-circle' },
        { name: 'LLM integrations', icon: 'link' },
      ],
    },
    {
      key: 'devops',
      title: 'DevOps / Tools',
      icon: 'tool',
      skills: [
        { name: 'Git', icon: 'git' },
        { name: 'Bitbucket', icon: 'bitbucket' },
        { name: 'Nx', icon: 'nx' },
        { name: 'Docker', icon: 'docker' },
        { name: 'CI/CD', icon: 'git-branch' },
        { name: 'Mocha', icon: 'mocha' },
        { name: 'ESLint', icon: 'eslint' },
        { name: 'npm', icon: 'npm' },
      ],
    },
  ];

  readonly experience: ExperienceItem[] = [
    {
      role: 'Lead Full-Stack Engineer',
      company: 'Company Name',
      duration: 'Start Date – Present',
      responsibilities: [
        'Designed scalable Angular applications',
        'Developed Node.js and Express APIs',
        'Built microservice-based systems',
        'Designed MongoDB schemas and aggregation pipelines',
        'Integrated AWS services',
        'Implemented authentication and authorization',
        'Improved application performance',
        'Implemented testing and CI/CD workflows',
        'Integrated AI services into document-processing workflows',
      ],
      technologies: ['Angular', 'Ionic', 'Node.js', 'Express.js', 'MongoDB', 'AWS', 'Gemini', 'Claude'],
      achievements: [
        'Add a measurable achievement here once available',
        'Add a measurable achievement here once available',
      ],
    },
  ];

  readonly projects: Project[] = [
    {
      id: 'peekazoo',
      name: 'Peekazoo',
      category: 'Interactive Kids Learning Platform',
      description:
        'An interactive learning and entertainment experience designed for children, combining games, visual interaction and family participation.',
      technologies: ['Angular', 'Ionic', 'TypeScript', 'Interactive Games', 'Camera-based Interaction', 'AI / Multimedia'],
      features: [
        'Interactive, camera-based games for children',
        'Family-oriented shared activities',
        'Engaging multimedia experiences',
        'Cross-platform mobile delivery via Ionic',
      ],
      detail: {
        problem:
          'Placeholder: describe the specific challenge Peekazoo needed to solve for young users and families.',
        solution:
          'Placeholder: summarize the interactive, camera-based learning experience built to solve it.',
        architecture: [
          { label: 'Angular / Ionic App' },
          { label: 'Camera / Media Interaction Layer' },
          { label: 'REST API' },
          { label: 'Node.js Services' },
          { label: 'Media / AI Processing' },
        ],
        myRole: 'Placeholder: describe your specific role and ownership on this project.',
        technologies: ['Angular', 'Ionic', 'TypeScript', 'Node.js', 'AI / Multimedia'],
        challenges: [
          'Placeholder: real-time camera interaction performance',
          'Placeholder: cross-device compatibility for young users',
        ],
        implementation: [
          'Placeholder: key implementation detail one',
          'Placeholder: key implementation detail two',
        ],
        results: ['Placeholder: outcome or impact once available'],
      },
    },
    {
      id: 'toptrix',
      name: 'Toptrix',
      category: 'EdTech Platform',
      description:
        'An education technology platform supporting learning management, assessment, analytics and academic workflows for students and institutions.',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'AI-assisted workflows', 'Role-based Access'],
      features: [
        'Learning management system (LMS)',
        'Assessment management',
        'Analytics dashboards',
        'Course management',
        'AI-assisted workflows',
        'Role-based access control',
      ],
      detail: {
        problem: 'Placeholder: describe the academic workflow challenge Toptrix addresses.',
        solution: 'Placeholder: summarize the LMS, assessment and analytics platform built.',
        architecture: [
          { label: 'Angular App' },
          { label: 'REST API' },
          { label: 'Node.js Microservices' },
          { label: 'MongoDB' },
          { label: 'AI-assisted Workflows' },
        ],
        myRole: 'Placeholder: describe your specific role and ownership on this project.',
        technologies: ['Angular', 'Node.js', 'Express.js', 'MongoDB', 'AI Integrations'],
        challenges: [
          'Placeholder: role-based access across institutions',
          'Placeholder: analytics at scale',
        ],
        implementation: [
          'Placeholder: key implementation detail one',
          'Placeholder: key implementation detail two',
        ],
        results: ['Placeholder: outcome or impact once available'],
      },
    },
    {
      id: 'tripcard',
      name: 'Tripcard',
      category: 'Enterprise Mobile + Cloud Application',
      description:
        'The system processes uploaded documents and images and uses automated extraction and validation workflows across a cloud-native, microservice architecture.',
      technologies: ['Ionic Angular', 'Node.js', 'MongoDB / DocumentDB', 'AWS Lambda', 'S3', 'SQS', 'AI Document Processing', 'Microservices'],
      features: [
        'Document / image upload workflows',
        'Automated extraction and validation',
        'Serverless processing via AWS Lambda',
        'Asynchronous processing via SQS',
        'Microservice-based backend',
      ],
      detail: {
        problem: 'Placeholder: describe the enterprise document-processing challenge Tripcard solves.',
        solution:
          'Placeholder: summarize the automated document extraction and validation workflow across mobile and cloud.',
        architecture: [
          { label: 'Ionic Angular App' },
          { label: 'API Gateway / REST API' },
          { label: 'Node.js Microservices' },
          { label: 'MongoDB / DocumentDB' },
          { label: 'S3 / SQS' },
          { label: 'AWS Lambda' },
          { label: 'AI Document Processing' },
        ],
        myRole: 'Placeholder: describe your specific role and ownership on this project.',
        technologies: ['Ionic Angular', 'Node.js', 'MongoDB', 'DocumentDB', 'AWS Lambda', 'S3', 'SQS'],
        challenges: [
          'Placeholder: reliable document extraction accuracy',
          'Placeholder: async processing at scale',
        ],
        implementation: [
          'Placeholder: key implementation detail one',
          'Placeholder: key implementation detail two',
        ],
        results: ['Placeholder: outcome or impact once available'],
      },
    },
    {
      id: 'bgr',
      name: 'BGR / Industrial Application',
      category: 'Industrial Operations Platform',
      description:
        'An operations platform supporting tripcard management, supervisors, drivers, excavators and trucks across mine operations, with document processing and real-time/polling workflows.',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Document Processing', 'Real-time / Polling Workflows'],
      features: [
        'Tripcard management',
        'Supervisor, driver and equipment tracking',
        'Excavator and truck operations',
        'Document processing workflows',
        'Real-time / polling based updates',
      ],
      detail: {
        problem: 'Placeholder: describe the industrial / mine-operations challenge this platform solves.',
        solution: 'Placeholder: summarize the operations tracking and document workflow platform built.',
        architecture: [
          { label: 'Angular App' },
          { label: 'REST API' },
          { label: 'Node.js Services' },
          { label: 'MongoDB' },
          { label: 'Document Processing' },
          { label: 'Real-time / Polling Layer' },
        ],
        myRole: 'Placeholder: describe your specific role and ownership on this project.',
        technologies: ['Angular', 'Node.js', 'Express.js', 'MongoDB'],
        challenges: [
          'Placeholder: coordinating real-time operational data across roles',
          'Placeholder: reliable document capture in field conditions',
        ],
        implementation: [
          'Placeholder: key implementation detail one',
          'Placeholder: key implementation detail two',
        ],
        results: ['Placeholder: outcome or impact once available'],
      },
    },
  ];

  readonly architectureNodes: ArchitectureNode[] = [
    { id: 'frontend', label: 'Frontend', description: 'Angular and Ionic applications delivering responsive web and mobile experiences.', column: 2, row: 0 },
    { id: 'client', label: 'Angular / Ionic', description: 'Component-driven UI, state management and API integration on the client.', column: 2, row: 1 },
    { id: 'api', label: 'REST APIs', description: 'Versioned, secured REST APIs exposed to client applications.', column: 2, row: 2 },
    { id: 'node', label: 'Node.js / Express', description: 'Express-based services handling routing, validation and business logic.', column: 2, row: 3 },
    { id: 'service-a', label: 'Service A', description: 'Domain-focused microservice with a single, well-defined responsibility.', column: 0, row: 4 },
    { id: 'service-b', label: 'Service B', description: 'Independently deployable microservice communicating over defined contracts.', column: 2, row: 4 },
    { id: 'service-c', label: 'Service C', description: 'Scales independently based on domain-specific load.', column: 4, row: 4 },
    { id: 'mongo', label: 'MongoDB / DocumentDB', description: 'Schema design, indexing and aggregation pipelines tuned for production workloads.', column: 2, row: 5 },
    { id: 's3', label: 'S3', description: 'Durable object storage for documents, images and media.', column: 0, row: 6 },
    { id: 'sqs', label: 'SQS', description: 'Decouples services with asynchronous, durable message queues.', column: 2, row: 6 },
    { id: 'lambda', label: 'Lambda', description: 'Serverless compute for event-driven and on-demand processing.', column: 4, row: 6 },
    { id: 'ai', label: 'AI / OCR', description: 'AI and OCR-driven processing for document extraction and validation.', column: 4, row: 7 },
  ];

  readonly architectureConnections: ArchitectureConnection[] = [
    { from: 'frontend', to: 'client' },
    { from: 'client', to: 'api' },
    { from: 'api', to: 'node' },
    { from: 'node', to: 'service-a' },
    { from: 'node', to: 'service-b' },
    { from: 'node', to: 'service-c' },
    { from: 'service-a', to: 'mongo' },
    { from: 'service-b', to: 'mongo' },
    { from: 'service-c', to: 'mongo' },
    { from: 'mongo', to: 's3' },
    { from: 'mongo', to: 'sqs' },
    { from: 'mongo', to: 'lambda' },
    { from: 'lambda', to: 'ai' },
  ];

  readonly expertiseCards: ExpertiseCard[] = [
    { title: 'Scalable Architecture', description: 'Design modular and maintainable applications using reusable components and services.', icon: 'layers' },
    { title: 'API Engineering', description: 'Build secure, scalable REST APIs using Node.js and Express.', icon: 'api' },
    { title: 'Database Engineering', description: 'Design MongoDB schemas, indexes and aggregation pipelines optimized for production workloads.', icon: 'database' },
    { title: 'Cloud Engineering', description: 'Build serverless and cloud-native solutions using AWS.', icon: 'cloud' },
    { title: 'AI Integration', description: 'Integrate LLM and AI services into real-world business workflows.', icon: 'cpu' },
    { title: 'Performance', description: 'Optimize frontend rendering, API performance, database queries and concurrent workloads.', icon: 'zap' },
    { title: 'Security', description: 'Implement authentication, authorization, JWT, API validation, secure configuration and access control.', icon: 'shield' },
  ];

  readonly processSteps: ProcessStep[] = [
    { label: 'Problem', description: 'Start from a real business or user problem, not a technology choice.', icon: 'help-circle' },
    { label: 'Understand', description: 'Clarify requirements, constraints and success criteria with stakeholders.', icon: 'search' },
    { label: 'Design', description: 'Design the architecture, data model and interfaces before writing code.', icon: 'edit' },
    { label: 'Develop', description: 'Implement in small, testable increments across frontend and backend.', icon: 'code' },
    { label: 'Test', description: 'Validate correctness with automated and manual testing.', icon: 'check-circle' },
    { label: 'Optimize', description: 'Profile and tune performance across the stack.', icon: 'zap' },
    { label: 'Deploy', description: 'Ship safely through CI/CD with rollbacks in mind.', icon: 'upload-cloud' },
    { label: 'Monitor', description: 'Observe production behavior and feed learnings back into the process.', icon: 'activity' },
  ];

  readonly aiCloudNodes: AiCloudNode[] = [
    { label: 'Gemini', icon: 'gemini', group: 'ai' },
    { label: 'Claude', icon: 'claude', group: 'ai' },
    { label: 'AWS Lambda', icon: 'lambda', group: 'cloud' },
    { label: 'S3', icon: 's3', group: 'cloud' },
    { label: 'SQS', icon: 'sqs', group: 'cloud' },
    { label: 'Cognito', icon: 'cognito', group: 'cloud' },
    { label: 'CloudFront', icon: 'cloudfront', group: 'cloud' },
    { label: 'MongoDB', icon: 'mongodb', group: 'data' },
    { label: 'Node.js', icon: 'nodejs', group: 'app' },
    { label: 'Angular', icon: 'angular', group: 'app' },
  ];

  readonly resumeUrl = 'assets/resume.pdf';
}
