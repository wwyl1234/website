import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have title as 'Winnie Lam'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Winnie Lam');
  });

  it('should render menu links', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const links = compiled.querySelectorAll('#myLinks a')
    const linkNames = ['LinkedIn', 'Github', 'Twitter', 'Contact']; 
    const hrefs = [
      'https://www.linkedin.com/in/lamwinnie1/',
      'https://github.com/wwyl1234',
      'https://twitter.com/wwyl1234',
      'mailto:winnie.lam1234@gmail.com'
     ]
    for (let i = 0; i < links.length; i++) {
        expect(links[i].textContent).toContain(linkNames[i]);
        expect(links[i].href).toContain(hrefs[i]);
    }
  });
});
