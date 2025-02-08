test("string not", () => {
    const name = "Indrawansyah"
    expect(name).not.toBe("Indra")
    expect(name).not.toEqual("Indra")
    expect(name).not.toContain("Joko")
})

test("number not", () => {
    const value = 2 + 2
    expect(value).not.toBeGreaterThan(5)
    expect(value).not.toBeLessThan(3)
    expect(value).not.toBe(5)
})