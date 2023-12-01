import { DataProvider } from "react-admin";
import dataProviderUtils from "utils/dataProviderUtils/dataProviderUtils";
import apolloClient from "./lib/apolloClient";

const getFirstSelection = (document: any) => {
  const firstSelection = document.definitions[0].selectionSet.selections[0];
  if (firstSelection.alias) {
    return firstSelection.alias.value;
  }
  return firstSelection.name.value;
};

export const dataProvider: Partial<DataProvider> = {
  getList: async (resource, params) => {
    console.log("getList", { resource, params });
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const result = await apolloClient.query({
      query: params.meta.query,
      variables: {
        skip: (page - 1) * perPage,
        take: perPage,
        where: dataProviderUtils.getWhereObject(params.filter),
        orderBy: [
          {
            [field]: order.toLowerCase(),
          },
        ],
      },
    });
    const returnValue = {
      data: result.data[getFirstSelection(params.meta.query)],
      total: result.data.total,
    };
    return returnValue;
  },
  getOne: async (resource, params) => {
    console.log("getOne", { resource, params });
    const result = await apolloClient.query({
      query: params.meta.query,
      variables: {
        where: {
          id: {
            equals: params.id,
          },
        },
      },
    });
    const returnValue = {
      data: result.data[getFirstSelection(params.meta.query)],
    };
    return returnValue;
  },
  getMany: async (resource, params) => {
    console.log("getMany", { resource, params });
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
      data: result.data[getFirstSelection(params.meta.query)],
    };
    return returnValue;
  },
  create: async (resource, params) => {
    console.log("create", { resource, params });
    const result = await apolloClient.mutate({
      mutation: params.meta.mutation,
      variables: params.data,
    });
    const returnValue = {
      data: result.data[getFirstSelection(params.meta.mutation)],
    };
    return returnValue;
  },
};
