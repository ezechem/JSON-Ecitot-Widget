import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgJsonEditorModule } from 'ang-jsoneditor';
import { AppComponent } from './app.component';
import { routes } from './app.module';
import { DemoComponent } from './demo/demo.component';
import { ShowComponent } from './demo/show.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          NgJsonEditorModule.forRoot(),
          RouterTestingModule.withRoutes(routes),
          FormsModule,
          ReactiveFormsModule,
        ],
        declarations: [AppComponent, DemoComponent, ShowComponent],
      }).compileComponents();
    })
  );

  it(
    'should create the app',
    waitForAsync(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    })
  );
});
