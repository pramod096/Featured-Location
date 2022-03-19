import { mount } from "@vue/test-utils";
import LocationCard from "./LocationCard";

it("should render the incremented value", () => {
  const wrapper = mount(LocationCard);
  wrapper.vm.addOne = jest.fn();

  expect(wrapper.exists()).toBe(true);
  expect(wrapper.find("button").html()).toBeTruthy();
  expect(wrapper.vm.addOne).toHaveBeenCalledTimes(1);
});
