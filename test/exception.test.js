import {callMe, MyException} from "../src/exception.js";

test("exception", () => {
    expect(() => callMe("Indra")).toThrow();
    expect(() => callMe("Indra")).toThrow(MyException);
    expect(() => callMe("Indra")).toThrow("Ups my exceptions happens")
})