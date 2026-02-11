import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  private portfolioService = inject(PortfolioService);
  
  protected filteredProjects = this.portfolioService.filteredProjects;
  protected selectedFilter = this.portfolioService.selectedFilter;

  setFilter(filter: string): void {
    this.portfolioService.setFilter(filter);
  }
}
