function getWhereObject(filter: any) {
  const output: any = {};

  for (const key in filter) {
    const value = filter[key];
    const parts = key.split("_");
    const lastPartIndex = parts.length - 1;

    let currentOutput = output;
    for (let i = 0; i < lastPartIndex; i++) {
      const part = parts[i];
      currentOutput[part] = currentOutput[part] || {};
      currentOutput = currentOutput[part];
    }
    const last = parts[lastPartIndex];
    if (last === "contains") {
      currentOutput["mode"] = "insensitive";
    }
    currentOutput[last] = value;
  }
  return output;
}
const dataProviderUtils = {
  getWhereObject,
};
export default dataProviderUtils;
