test("test toBe", () => {
    const name = "Indra";
    const hello = `Hello ${name}`;

    expect(hello).toBe("Hello Indra")
})

test("test toEquals", () => {
    let person = {id: "1"}
    Object.assign(person, {name: "Indra"})

    expect(person).toEqual({id: "1", name:"Indra"})
})