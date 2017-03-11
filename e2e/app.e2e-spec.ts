import { AbelgaxiolaPage } from './app.po';

describe('abelgaxiola App', () => {
  let page: AbelgaxiolaPage;

  beforeEach(() => {
    page = new AbelgaxiolaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
