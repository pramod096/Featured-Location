import AddLocation from "../src/views/AddLocation.vue";

describe("AddLocation", () => {
  it("checks if data exists to store location information", () => {
    expect(typeof AddLocation.data().locationName).toBe("string");
  });

  it("check if submit method exists to add new location", () => {
     expect(typeof AddLocation.submit).toBe("undefined")
  });
});
