import { ProjectKooksitePage } from './app.po';

describe('project-kooksite App', () => {
  let page: ProjectKooksitePage;

  beforeEach(() => {
    page = new ProjectKooksitePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
