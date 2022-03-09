import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import {By} from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the header', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const header = fixture.debugElement.query(By.directive(HeaderComponent));
    expect(header).toBeTruthy();
  });

  //it(`should have as title 'angular-webshop'`, () => {
  //  const fixture = TestBed.createComponent(AppComponent);
  //  const app = fixture.componentInstance;
  //  expect(app.title).toEqual('angular-webshop');
  //});

  //it('should render title', () => {
  //  const fixture = TestBed.createComponent(AppComponent);
  //  fixture.detectChanges();
  //  const compiled = fixture.nativeElement as HTMLElement;
  //  expect(compiled.querySelector('.content span')?.textContent).toContain('angular-webshop app is running!');
 // });
});
