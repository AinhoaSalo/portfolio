import { Component } from '@angular/core';
import { APP_CONSTANTS } from '../../constants/app.constants';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  protected readonly currentYear = APP_CONSTANTS.copyrightYear;
  protected readonly angularVersion = APP_CONSTANTS.angularVersion;
  protected readonly appName = APP_CONSTANTS.appName;
}
