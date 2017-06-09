import { KolobokPage } from './app.po';

describe('kolobok App', () => {
  let page: KolobokPage;

  beforeEach(() => {
    page = new KolobokPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
