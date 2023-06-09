import dataProviderUtils from "./dataProviderUtils";

describe("dataProviderUtils.getWhereObject", () => {
  it("should convert an input object with underscore-separated keys to an output object with nested objects", () => {
    const input = {
      spelling_startsWith: "hii",
      age_gte: 2,
    };

    const output = dataProviderUtils.getWhereObject(input);

    expect(output).toEqual({
      spelling: {
        startsWith: "hii",
      },
      age: {
        gte: 2,
      },
    });
  });

  it("should handle input objects with no underscore-separated keys", () => {
    const input = {
      name: "John Doe",
      age: 25,
    };

    const output = dataProviderUtils.getWhereObject(input);

    expect(output).toEqual(input);
  });

  it("should handle input objects with multiple underscore-separated keys", () => {
    const input = {
      nested_key1_key2_key3: "value",
    };

    const output = dataProviderUtils.getWhereObject(input);

    expect(output).toEqual({
      nested: {
        key1: {
          key2: {
            key3: "value",
          },
        },
      },
    });
  });

  it("should handle input objects with nested underscore-separated keys", () => {
    const input = {
      parent_key_child_key_grandchild: "value",
    };

    const output = dataProviderUtils.getWhereObject(input);

    expect(output).toEqual({
      parent: {
        key: {
          child: {
            key: {
              grandchild: "value",
            },
          },
        },
      },
    });
  });
});
