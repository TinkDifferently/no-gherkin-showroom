import {LocatableButton, LocatableInput, LocatableLabel, LocatableSelect, page} from "no-gkerkin-webtest";

const
    register = new LocatableButton("Зарегистрироваться", {
        xpath: "//a[.='Зарегистрироваться']"
    }),
    uid = new LocatableInput("Идентификатор", {
        xpath: "//input[@name='uid']"
    }),
    password = new LocatableInput("Пароль", {
        xpath: "//input[@name='password']"
    }),
    login = new LocatableButton("Войти", {
        xpath: "//button[@type='submit']"
    }),
    productMessage = new LocatableLabel("Сообщение об ошибке", {
        xpath: "//h2"
    }),
    variant = new LocatableSelect("Версия", {
        xpath: "//div[@role='group']"
    }, {
        xpath: ".//span"
    })

export default page('Showroom login')([register, login, uid, password, productMessage, variant])


