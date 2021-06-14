import {runTest} from "no-gkerkin-webtest/lib/test_runner";
import * as aviasalesConfig from "./src/resources/config.json"
import * as showroomConfig from "./src/resources/config2.json"
import {v1registerTest, v2registerTest} from "./src/tests/showroom";
import context from "no-gkerkin-webtest/lib/context/context";


context.push("base.url", aviasalesConfig.baseUrl)
context.push("page.path", aviasalesConfig["page.path"])

//runTest([green, red])

context.push("base.url", showroomConfig.baseUrl)
context.push("page.path", showroomConfig["page.path"])

runTest([v2registerTest])
