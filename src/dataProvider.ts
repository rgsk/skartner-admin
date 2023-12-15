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
    const query = fetcher[resource]?.list;
    if (!query) {
      throw new Error(`list fetcher not defined for ${resource}`);
    }
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const result = await apolloClient.query({
      query: query,
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
    if (typeof result.data.total !== 'number') {
      throw new Error(`total not fetched for getList ${resource}`);
    }
    const returnValue = {
      data: result.data[getFirstSelection(query)],
      total: result.data.total,
    };
    return returnValue;
  },
  getOne: async (resource, params) => {
    console.log('getOne', { resource, params });
    const query = fetcher[resource]?.one;
    if (!query) {
      throw new Error(`one fetcher not defined for ${resource}`);
    }
    const result = await apolloClient.query({
      query: query,
      variables: {
        where: {
          id: {
            equals: params.id,
          },
        },
      },
    });
    const returnValue = {
      data: result.data[getFirstSelection(query)],
    };
    return returnValue;
  },
  getMany: async (resource, params) => {
    console.log('getMany', { resource, params });
    const query = fetcher[resource]?.list;
    if (!query) {
      throw new Error(`list fetcher not defined for ${resource}`);
    }
    const result = await apolloClient.query({
      query: query,
      variables: {
        where: {
          id: {
            in: params.ids,
          },
        },
      },
    });
    const returnValue = {
      data: result.data[getFirstSelection(query)],
    };
    return returnValue;
  },
  create: async (resource, params) => {
    console.log('create', { resource, params });
    const mutation = fetcher[resource]?.create;
    if (!mutation) {
      throw new Error(`create fetcher not defined for ${resource}`);
    }
    const result = await apolloClient.mutate({
      mutation: mutation,
      variables: params.data,
    });
    const returnValue = {
      data: result.data[getFirstSelection(mutation)],
    };
    return returnValue;
  },
  deleteMany: async (resource, params) => {
    console.log('deleteMany', { resource, params });
    const mutation = fetcher[resource]?.deleteMany;
    if (!mutation) {
      throw new Error(`deleteMany fetcher not defined for ${resource}`);
    }
    const result = await apolloClient.mutate({
      mutation: mutation,
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
    const mutation = fetcher[resource]?.delete;
    if (!mutation) {
      throw new Error(`delete fetcher not defined for ${resource}`);
    }
    const result = await apolloClient.mutate({
      mutation: mutation,
      variables: {
        id: params.id,
      },
    });
    const returnValue = {
      data: result.data[getFirstSelection(mutation)],
    };
    return returnValue;
  },
  update: async (resource, params) => {
    console.log('update', { resource, params });
    const data = getDifferentKeys(params.previousData, params.data);
    const mutation = fetcher[resource]?.update;
    if (!mutation) {
      throw new Error(`update fetcher not defined for ${resource}`);
    }
    const result = await apolloClient.mutate({
      mutation: mutation,
      variables: {
        id: params.id,
        data: data,
      },
    });
    const returnValue = {
      data: result.data[getFirstSelection(mutation)],
    };
    return returnValue;
  },
  getManyReference: async (resource, params) => {
    console.log('getManyReference', { resource, params });
    const query = fetcher[resource]?.list;
    if (!query) {
      throw new Error(`list fetcher not defined for ${resource}`);
    }
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    params.filter[`${params.target}_equals`] = params.id;
    const result = await apolloClient.query({
      query: query,
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
      data: result.data[getFirstSelection(query)],
      total: result.data.total,
    };
    return returnValue;
  },
  updateMany: async (resource, params) => {
    console.log('updateMany', { resource, params });
    throw new Error('updateMany not implemented');
    const returnValue = {
      data: params.ids,
    };
    return returnValue;
  },
};
