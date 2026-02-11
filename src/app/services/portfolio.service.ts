import { Injectable, signal, computed } from '@angular/core';
import { Project, Skill, Experience } from '../models/portfolio.models';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  // State using Signals
  private projectsSignal = signal<Project[]>([
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce platform built with Angular 20, featuring product catalog, shopping cart, and checkout.',
      technologies: ['Angular 20', 'TypeScript', 'Tailwind CSS', 'RxJS', 'Signals'],
      imageUrl: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
      demoUrl: 'https://example.com/demo1',
      githubUrl: 'https://github.com/example/project1',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates and team features.',
      technologies: ['Angular', 'Firebase', 'Material Design', 'PWA'],
      imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
      demoUrl: 'https://example.com/demo2',
      githubUrl: 'https://github.com/example/project2',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Beautiful weather dashboard with forecasts, maps, and historical data visualization.',
      technologies: ['Angular', 'Chart.js', 'OpenWeather API', 'SCSS'],
      imageUrl: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop',
      githubUrl: 'https://github.com/example/project3',
      featured: false
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'Modern portfolio website showcasing projects and skills with smooth animations.',
      technologies: ['Angular 20', 'Tailwind CSS', 'Signals', 'Standalone Components'],
      imageUrl: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
      githubUrl: 'https://github.com/example/project4',
      featured: false
    }
  ]);

  private skillsSignal = signal<Skill[]>([
    { name: 'Angular', level: 5, category: 'frontend' },
    { name: 'TypeScript', level: 5, category: 'frontend' },
    { name: 'JavaScript', level: 5, category: 'frontend' },
    { name: 'RxJS', level: 4, category: 'frontend' },
    { name: 'HTML5', level: 5, category: 'frontend' },
    { name: 'CSS3/SCSS', level: 5, category: 'frontend' },
    { name: 'Tailwind CSS', level: 5, category: 'frontend' },
    { name: 'Node.js', level: 4, category: 'backend' },
    { name: 'Express', level: 4, category: 'backend' },
    { name: 'MongoDB', level: 3, category: 'backend' },
    { name: 'PostgreSQL', level: 3, category: 'backend' },
    { name: 'Git', level: 5, category: 'tools' },
    { name: 'Docker', level: 3, category: 'tools' },
    { name: 'Jest', level: 4, category: 'tools' },
    { name: 'Figma', level: 4, category: 'tools' }
  ]);

  private experiencesSignal = signal<Experience[]>([
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'Tech Company Inc.',
      period: '2022 - Present',
      description: 'Leading frontend development using Angular, implementing modern architectures with standalone components and signals.',
      current: true
    },
    {
      id: 2,
      title: 'Frontend Developer',
      company: 'Digital Agency',
      period: '2020 - 2022',
      description: 'Developed responsive web applications using Angular, React, and Vue.js for various clients.',
      current: false
    },
    {
      id: 3,
      title: 'Junior Web Developer',
      company: 'Startup Co.',
      period: '2019 - 2020',
      description: 'Built and maintained company websites and web applications using modern JavaScript frameworks.',
      current: false
    }
  ]);

  private selectedFilterSignal = signal<string>('all');

  // Computed values
  public projects = this.projectsSignal.asReadonly();
  public skills = this.skillsSignal.asReadonly();
  public experiences = this.experiencesSignal.asReadonly();
  public selectedFilter = this.selectedFilterSignal.asReadonly();

  public filteredProjects = computed(() => {
    const filter = this.selectedFilterSignal();
    const projects = this.projectsSignal();
    
    if (filter === 'featured') {
      return projects.filter(p => p.featured);
    }
    return projects;
  });

  public skillsByCategory = computed(() => {
    const skills = this.skillsSignal();
    return {
      frontend: skills.filter(s => s.category === 'frontend'),
      backend: skills.filter(s => s.category === 'backend'),
      tools: skills.filter(s => s.category === 'tools'),
      other: skills.filter(s => s.category === 'other')
    };
  });

  // Methods
  setFilter(filter: string): void {
    this.selectedFilterSignal.set(filter);
  }

  addProject(project: Project): void {
    this.projectsSignal.update(projects => [...projects, project]);
  }

  addSkill(skill: Skill): void {
    this.skillsSignal.update(skills => [...skills, skill]);
  }
}
