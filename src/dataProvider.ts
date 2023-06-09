import jsonServerProvider from "ra-data-json-server";
import { DataProvider } from "react-admin";
import apolloClient from "./lib/apolloClient";

export const jsonServerDataProvider = jsonServerProvider(
  import.meta.env.VITE_JSON_SERVER_URL
);

export const dataProvider: Partial<DataProvider> = {
  getList: async (resource, params, ...args) => {
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
  getOne: async (resource, params) => {
    console.log({ resource, params });
    const singularResource = resource.slice(0, resource.length - 1);
    const result = await apolloClient.query({
      query: params.meta.query,
      variables: {
        where: {
          id: params.id,
        },
      },
    });
    const returnValue = {
      data: result.data[singularResource],
    };
    return returnValue;
  },
};
