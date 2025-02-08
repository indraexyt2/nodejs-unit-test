export class MyException extends Error {

}

export const callMe = (name) => {
    if (name === "Indra") {
        throw new MyException("Ups my exceptions happens")
    } else {
        return "OK"
    }
}
