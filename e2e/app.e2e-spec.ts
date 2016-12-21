import { AaronTheDevPage } from './app.po';

describe('aaron-the-dev App', function() {
  let page: AaronTheDevPage;

  beforeEach(() => {
    page = new AaronTheDevPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
