import {LocatableButton, LocatableInput} from "no-gkerkin-webtest";
import {page} from "no-gkerkin-webtest";

const
    uid = new LocatableInput("Идентификатор",{
        xpath: "//input[@name='uid']"
    }),
    password = new LocatableInput("Пароль",{
        xpath: "//input[@name='password']"
    }),
    country = new LocatableInput("Страна", {
        xpath: "//input[@name='country']"
    }),
    name = new LocatableInput("Имя", {
        xpath: "//input[@name='name']"
    }),
    submit = new LocatableButton("Зарегестрироваться", {
        xpath: "//button/span[.='Зарегестрироваться']"
    })

export default page('Showroom register')([submit,name,uid,password,country])
