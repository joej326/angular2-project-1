import { AngularCourse1Page } from './app.po';

describe('angular-course1 App', function() {
  let page: AngularCourse1Page;

  beforeEach(() => {
    page = new AngularCourse1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
