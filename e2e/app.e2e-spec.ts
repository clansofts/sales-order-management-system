import { SalesOrderManagementSystemPage } from './app.po';

describe('sales-order-management-system App', () => {
  let page: SalesOrderManagementSystemPage;

  beforeEach(() => {
    page = new SalesOrderManagementSystemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
