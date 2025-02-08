import {sayHelloAsync} from "../src/async.js";

test("async test", async () => {
    const hello = await sayHelloAsync("Indra")
    expect(hello).toBe("Hello Indra")
})