import {
  getPropsClassName,
  getXaxisClassName,
  getYaxisClassName,
} from "./Easyflex";

/* getPropsClassName Function*/
describe("getPropsClassName Function", () => {
  test("Should return a specific className if executed without parameters", () => {
    expect(getPropsClassName()).toBe("defaultFlexContainerSize");
  });

  test("Should return a className equal to passed parameter", () => {
    expect(getPropsClassName("mock-classname")).toBe("mock-classname");
  });
});

/* getXaxisClassName Function*/
describe("getXaxisClassName Function", () => {
  test("If it has column set to true - blank spaces required", () => {
    expect(getXaxisClassName(true, "left")).toBe(
      "easyflex-column column-easyflex-xaxis-left "
    );
  });

  test("If it has column set to false - blank spaces required", () => {
    expect(getXaxisClassName(false, "left")).toBe(" row-easyflex-xaxis-left ");
  });

  test("If the second parameter is ommited", () => {
    expect(getXaxisClassName(false)).toBe(" row-easyflex-xaxis-center ");
  });
});

/* getYaxisClassName Function*/
describe("getYaxisClassName Function", () => {
  test("If it has column set to true - blank spaces required", () => {
    expect(getYaxisClassName(true, "left")).toBe(
      "easyflex-column column-easyflex-yaxis-left "
    );
  });

  test("If it has column set to false - blank spaces required", () => {
    expect(getYaxisClassName(false, "left")).toBe(" row-easyflex-yaxis-left ");
  });

  test("If the second parameter is ommited", () => {
    expect(getYaxisClassName(false)).toBe(" row-easyflex-yaxis-center ");
  });
});
