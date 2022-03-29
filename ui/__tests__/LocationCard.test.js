import LocationCard from "../src/views/LocationCard.vue";

describe("LocationCard", () => {
  it("stores the current location", () => {
    expect(typeof LocationCard.data().currentLocation).toBe("object");
  });

  it("check if it displays random location", () => {
    expect(typeof LocationCard.mounted).toBe("function");
  });

  it("calls mounted", () => {
    expect(typeof LocationCard.onactivated).toBe("function");
  });
});
