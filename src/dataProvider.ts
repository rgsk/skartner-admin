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

function getDifferentKeys(obj1: any, obj2: any) {
  const result: any = {};

  for (const key in obj2) {
    if (obj1[key] !== obj2[key]) {
      result[key] = obj2[key];
    }
  }

  return result;
}

export const dataProvider: DataProvider = {
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
  deleteMany: async (resource, params) => {
    console.log("deleteMany", { resource, params });
    const result = await apolloClient.mutate({
      mutation: params.meta.mutation,
      variables: {
        ids: params.ids,
      },
    });
    const returnValue = {
      data: params.ids,
    };
    return returnValue;
  },
  delete: async (resource, params) => {
    console.log("delete", { resource, params });
    const result = await apolloClient.mutate({
      mutation: params.meta.mutation,
      variables: {
        id: params.id,
      },
    });
    const returnValue = {
      data: result.data[getFirstSelection(params.meta.mutation)],
    };
    return returnValue;
  },
  update: async (resource, params) => {
    console.log("update", { resource, params });
    const data = getDifferentKeys(params.previousData, params.data);
    const result = await apolloClient.mutate({
      mutation: params.meta.mutation,
      variables: {
        id: params.id,
        data: data,
      },
    });
    const returnValue = {
      data: result.data[getFirstSelection(params.meta.mutation)],
    };
    return returnValue;
  },
};
