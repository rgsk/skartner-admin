import jsonServerProvider from "ra-data-json-server";
import { DataProvider } from "react-admin";
import apolloClient from "./lib/apolloClient";

export const jsonServerDataProvider = jsonServerProvider(
  import.meta.env.VITE_JSON_SERVER_URL
);

function getWhereObject(filter: any) {
  const output: any = {};
  for (const key in filter) {
    const value = filter[key];
    const [prefix, suffix] = key.split("_");
    if (suffix) {
      output[prefix] = output[prefix] || {};
      output[prefix][suffix] = value;
    } else {
      output[key] = value;
    }
  }

  return output;
}

export const dataProvider: Partial<DataProvider> = {
  getList: async (resource, params) => {
    console.log({ resource, params });
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const result = await apolloClient.query({
      query: params.meta.query,
      variables: {
        skip: (page - 1) * perPage,
        take: perPage,
        where: getWhereObject(params.filter),
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
  getMany: async (resource, params) => {
    console.log({ resource, params });
    const result = await apolloClient.query({
      query: params.meta.query,
      variables: {
        where: {
          id: {
            in: params.ids,
          },
        },
      },
    });
    const returnValue = {
      data: result.data[resource],
    };
    return returnValue;
  },
};
