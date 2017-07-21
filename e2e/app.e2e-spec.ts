import { GeocacherPage } from './app.po';

describe('geocacher App', () => {
  let page: GeocacherPage;

  beforeEach(() => {
    page = new GeocacherPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
