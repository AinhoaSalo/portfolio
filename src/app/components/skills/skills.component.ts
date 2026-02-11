import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  private portfolioService = inject(PortfolioService);
  
  protected skillsByCategory = this.portfolioService.skillsByCategory;

  getStarArray(level: number): number[] {
    return Array(5).fill(0).map((_, i) => i < level ? 1 : 0);
  }
}
