import { browser, by, element } from 'protractor';

export class AppPage {
    navigateTo() {
        // tslint:disable-next-line:no-any
        return <Promise<any>>browser.get(browser.baseUrl);
    }

    getTitleText() {
        return <Promise<string>>element(by.css('app-root h1')).getText();
    }
}
