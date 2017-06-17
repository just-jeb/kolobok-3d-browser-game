import { KolobokPage } from './app.po';

describe('kolobok App', () => {

  beforeEach(() => {
  });

  it('should display welcome message', () => {
    KolobokPage.navigateTo();
    expect(KolobokPage.getParagraphText()).toEqual('Welcome to app!!');
  });
});
