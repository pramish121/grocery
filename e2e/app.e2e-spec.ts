import { GroceryPage } from './app.po';

describe('grocery App', () => {
  let page: GroceryPage;

  beforeEach(() => {
    page = new GroceryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
