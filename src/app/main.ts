import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { environment } from './environments/environment';

import { AppModule } from './app.module';
// if (environment.production) {
//     enableProdMode();
//   }
platformBrowserDynamic().bootstrapModule(AppModule);
