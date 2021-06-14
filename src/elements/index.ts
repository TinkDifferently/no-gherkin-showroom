import {Locator} from "selenium-webdriver";
import {InputDate, LocatableElement} from "no-gkerkin-webtest/lib/elements";

export class LocatableCalendar<T extends string> extends LocatableElement<T> implements InputDate {
    constructor(title: T, locator: Locator) {
        super(title, locator);
    }

    async getText(): Promise<string> {
        return await this.find().getText();
    }

    async setText(date: string = new Date().toDateString()): Promise<void> {
        const dateBox = new Date(Date.parse(date))
        const month = new Intl.DateTimeFormat('ru', {month: 'long'}).format(dateBox).substr(1);
        const day = new Intl.DateTimeFormat('ru', {day: 'numeric'}).format(dateBox)
        const monthSelect = this.find().findElement({xpath: `.//select[@class='calendar-caption__select']`});
        await monthSelect.click()
        const monthValue = this.find().findElement({xpath: `.//option[contains(text(),'${month}')]`});
        await monthValue.click();
        const dayValue = this.find().findElement({xpath: `.//div[@class='calendar-day__date'][text()='${day}']`});
        await dayValue.click();
    }
}
