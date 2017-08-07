import { AngTutorialPage } from './app.po';

describe('ang-tutorial App', () => {
  let page: AngTutorialPage;

  beforeEach(() => {
    page = new AngTutorialPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
