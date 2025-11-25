import puppeteer, { Browser, Page } from 'puppeteer';

class PuppeteerManager {
  private static instance: PuppeteerManager;
  private browser: Browser | null = null;
  private page: Page | null = null;

  private constructor() {}

  static getInstance(): PuppeteerManager {
    if (!PuppeteerManager.instance) {
      PuppeteerManager.instance = new PuppeteerManager();
    }
    return PuppeteerManager.instance;
  }

  async init(): Promise<Page> {
    if (!this.browser) {
      this.browser = await puppeteer.launch({ headless: false });
      this.page = await this.browser.newPage();
    }
    return this.page!;
  }

  getPage(): Page {
    if (!this.page) {
      this.init();
    }
    return this.page!;
  }
}

export const puppeteerManager = PuppeteerManager.getInstance();
