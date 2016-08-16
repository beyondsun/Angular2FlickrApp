import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import {HTTP_PROVIDERS, JSONP_PROVIDERS} from '@angular/http'



platformBrowserDynamic().bootstrapModule(AppModule, [HTTP_PROVIDERS, JSONP_PROVIDERS]);