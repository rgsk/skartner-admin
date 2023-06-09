import jsonServerProvider from "ra-data-json-server";
import { DataProvider } from "react-admin";
import apolloClient from "./lib/apolloClient";

export const jsonServerDataProvider = jsonServerProvider(
  import.meta.env.VITE_JSON_SERVER_URL
);

export const dataProvider: Partial<DataProvider> = {
  getList: async (resource, params, ...args) => {
    console.log({ resource, params, args });
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;

    const result = await apolloClient.query({
      query: params.meta.query,
      variables: {
        skip: (page - 1) * perPage,
        take: perPage,
      },
    });
    const returnValue = {
      data: result.data[resource],
      total: result.data.total,
    };
    return returnValue;
  },
};
