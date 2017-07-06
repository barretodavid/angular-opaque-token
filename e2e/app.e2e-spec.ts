import { InjectTokenPage } from './app.po';

describe('inject-token App', () => {
  let page: InjectTokenPage;

  beforeEach(() => {
    page = new InjectTokenPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
