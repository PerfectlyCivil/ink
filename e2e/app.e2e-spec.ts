import { InkPage } from './app.po';

describe('ink App', () => {
  let page: InkPage;

  beforeEach(() => {
    page = new InkPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
