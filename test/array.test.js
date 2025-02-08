test("array", () => {
    const names = ["Indra", "Wansyah"];
    expect(names).toContain("Wansyah");
    expect(names).toEqual(["Indra", "Wansyah"])

    const persons = [{name:"Indra"}, {name:"Kiki"}];
    expect(persons).toContainEqual({name:"Kiki"});
    expect(persons).toEqual([{name:"Indra"}, {name:"Kiki"}])
})