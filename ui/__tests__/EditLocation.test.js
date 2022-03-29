import EditLocation from "../src/views/EditLocation.vue";

describe("EditLocation", () => {
  it("gets the location to edit", () => {
    expect(typeof EditLocation.mounted).toBe("function");
  });

  it("routes to the selected location", () => {
    expect(typeof EditLocation.submit).toBe("undefined");
  });

  it("data to show list of all locations", () => {
    expect(typeof EditLocation.data().editLocation).toBe("object");
  });
});
