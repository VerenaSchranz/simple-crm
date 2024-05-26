import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({"projectId":"simple-crm-1df09","appId":"1:1005014666155:web:0f42a0a8d8f4ef6a1760ee","storageBucket":"simple-crm-1df09.appspot.com","apiKey":"AIzaSyBUqesxISmbS-flSuQte2Qz7CL3peI7k3A","authDomain":"simple-crm-1df09.firebaseapp.com","messagingSenderId":"1005014666155"})), provideFirestore(() => getFirestore())]
};
