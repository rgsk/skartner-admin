import fetcher from 'fetcher';
import { DataProvider } from 'react-admin';
import dataProviderUtils from 'utils/dataProviderUtils/dataProviderUtils';
import apolloClient from './lib/apolloClient';

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
    if (JSON.stringify(obj1[key]) !== JSON.stringify(obj2[key])) {
      result[key] = obj2[key];
    }
  }

  return result;
}

export const dataProvider: DataProvider = {
  getList: async (resource, params) => {
    console.log('getList', { resource, params });
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const result = await apolloClient.query({
      query: fetcher[resource].list,
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
      data: result.data[getFirstSelection(fetcher[resource].list)],
      total: result.data.total,
    };
    return returnValue;
  },
  getOne: async (resource, params) => {
    console.log('getOne', { resource, params });
    const result = await apolloClient.query({
      query: fetcher[resource].one,
      variables: {
        where: {
          id: {
            equals: params.id,
          },
        },
      },
    });
    const returnValue = {
      data: result.data[getFirstSelection(fetcher[resource].one)],
    };
    return returnValue;
  },
  getMany: async (resource, params) => {
    console.log('getMany', { resource, params });
    const result = await apolloClient.query({
      query: fetcher[resource].list,
      variables: {
        where: {
          id: {
            in: params.ids,
          },
        },
      },
    });
    const returnValue = {
      data: result.data[getFirstSelection(fetcher[resource].list)],
    };
    return returnValue;
  },
  create: async (resource, params) => {
    console.log('create', { resource, params });
    const result = await apolloClient.mutate({
      mutation: fetcher[resource].create,
      variables: params.data,
    });
    const returnValue = {
      data: result.data[getFirstSelection(fetcher[resource].create)],
    };
    return returnValue;
  },
  deleteMany: async (resource, params) => {
    console.log('deleteMany', { resource, params });
    const result = await apolloClient.mutate({
      mutation: fetcher[resource].deleteMany,
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
    console.log('delete', { resource, params });
    const result = await apolloClient.mutate({
      mutation: fetcher[resource].delete,
      variables: {
        id: params.id,
      },
    });
    const returnValue = {
      data: result.data[getFirstSelection(fetcher[resource].delete)],
    };
    return returnValue;
  },
  update: async (resource, params) => {
    console.log('update', { resource, params });
    const data = getDifferentKeys(params.previousData, params.data);
    const result = await apolloClient.mutate({
      mutation: fetcher[resource].update,
      variables: {
        id: params.id,
        data: data,
      },
    });
    const returnValue = {
      data: result.data[getFirstSelection(fetcher[resource].update)],
    };
    return returnValue;
  },
  getManyReference: async (resource, params) => {
    console.log('getManyReference', { resource, params });
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    params.filter[`${params.target}_equals`] = params.id;
    const result = await apolloClient.query({
      query: fetcher[resource].list,
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
      data: result.data[getFirstSelection(fetcher[resource].list)],
      total: result.data.total,
    };
    return returnValue;
  },
};
