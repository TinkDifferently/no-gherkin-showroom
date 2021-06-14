import {LocatableButton, LocatableLabel} from "no-gkerkin-webtest/lib/elements";
import context from "no-gkerkin-webtest/lib/context/context";
import {page} from "no-gkerkin-webtest/lib/page";
import {WebDriver} from "selenium-webdriver";

const
    from = new LocatableLabel("Откуда", {
        xpath: "//div[@class='subscriptions-popup']/h3/span[1]",
    }),
    where = new LocatableLabel("Куда", {
        xpath: "//div[@class='subscriptions-popup']/h3/span[3]",
    }),
    when = new LocatableLabel("Когда", {
        xpath: "//form[@class='subscriptions-popup__form']/p",
    }),
    expect = new LocatableButton("Следить за ценой", {
        xpath: "//form[@class='subscriptions-popup__form']//button",
    }),
    switchAction = async () => {
        const driver: WebDriver = await context.get('driver');
        let handles = await driver.getAllWindowHandles();
        while (handles.length == 1) {
            handles = await driver.getAllWindowHandles();
        }
        await driver.switchTo().window(handles[1]);
        await driver.wait(() => driver.executeScript("return document.readyState === 'complete' && document.getElementsByTagName('html')[0].className!=='page --home --ru wf-loading'"));
        await driver.wait(async driver1 => {
            const clazz = await driver1.findElement({xpath: "//div[@class='loader']/div[1]"}).getAttribute("class")
            return clazz === 'loader__stripes --animation-finished --blue';
        })
        await driver.executeScript("const eve =new MouseEvent('mouseleave'); document.dispatchEvent(eve)")
        return true;
    };


export default page("Subscribe for price")([from, where, when, expect], switchAction)
