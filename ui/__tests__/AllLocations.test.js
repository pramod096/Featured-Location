import AllLocations from "../src/views/AllLocations.vue";

describe("AllLocations", () => {
  it("Gets all the locations on load", () => {
    expect(typeof AllLocations.mounted).toBe("function");
  });

  it("routes to the selected location", () => {
    expect(typeof AllLocations.openCard).toBe("undefined");
  });

  it("Calls mounted", () => {
    expect(typeof AllLocations.onActivated).toBe("function");
  });

  it("data to show list of all locations", () => {
    expect(typeof AllLocations.data().locations).toBe("object");
  });
});
