import { CvWatchPage } from './app.po';

describe('cv-watch App', () => {
  let page: CvWatchPage;

  beforeEach(() => {
    page = new CvWatchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
