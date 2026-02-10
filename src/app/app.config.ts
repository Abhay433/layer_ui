import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes,
    withInMemoryScrolling({
      scrollPositionRestoration: 'top',   // 👈 har route top se open
      anchorScrolling: 'enabled'          // 👈 #features, #industries kaam karega
    })
  )

  ]
};
