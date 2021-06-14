import {Test} from "no-gkerkin-webtest";
import {PageSource} from "./index";


async function v1register(page: PageSource) {

    await page('Showroom login')('Зарегистрироваться')({action: 'нажать'})

    await page('Showroom register')('Имя')({action: 'установить текст', text: 'Димитро'})

    await page('Showroom register')('Идентификатор')({action: 'установить текст', text: 'reg-12'})

    await page('Showroom register')('Страна')({action: 'установить текст', text: 'Индия'})

    await page('Showroom register')('Пароль')({action: 'установить текст', text: '@logical-value:12'})

    await page('Showroom register')('Зарегистрироваться')({action: 'нажать'})

    await page('Showroom login')('Идентификатор')({action: 'установить текст', text: 'reg-12'})

    await page('Showroom login')('Пароль')({action: 'установить текст', text: '@logical-value:12'})

    await page('Showroom login')('Войти')({action: 'нажать'})

    await page('Showroom login')('Сообщение об ошибке')({action: 'проверить текст', expectedText:`Уважаемый 'Димитро' ваш статус в данный момент неизвестен. Обратитесь к представителю в вашем регионе 'Индия'`})
}

async function v2register(page: PageSource) {
    await page('Showroom login')('Версия')({action: 'выбрать элемент', text:'V2'})

    await v1register(page)
}

export const v1registerTest: Test = {
    name: "Зарегестрироваться и войти по uid и password v1",
    run: v1register
}

export const v2registerTest: Test = {
    name: "Зарегестрироваться и войти по uid и password v2",
    run: v2register
}
