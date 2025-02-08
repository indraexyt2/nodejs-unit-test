import {sum} from "../src/sum.js";

describe("inner scope", () => {
    beforeAll(() => console.info("Before all"))
    afterAll(() => console.info("After all"))

    beforeEach(() => console.info("Before each"))
    afterEach(() => console.info("After each"))

    test("test sum", () => {
        expect(sum(5, 5)).toBe(10)
    })
})