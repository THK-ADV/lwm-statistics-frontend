import { LWMStatisticsPage } from './app.po';

describe('lwmstatistics App', () => {
  let page: LWMStatisticsPage;

  beforeEach(() => {
    page = new LWMStatisticsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
