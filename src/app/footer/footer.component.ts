import {Component} from '@angular/core';

@Component({
  selector: 'footer-app',
  template: `
      <footer class="mdl-mini-footer">
      <div class="mdl-mini-footer--left-section">
        <button class="mdl-mini-footer--social-btn social-btn social-btn__twitter">
              <span class="visuallyhidden">Twitter</span>
            </button>
      </div>
    </footer>
`
})
export class FooterComponent{}
