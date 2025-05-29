// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import MetMuseum from '@dackerman-stainless/met-museum-demo';

export const metadata: Metadata = {
  resource: 'objects',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/objects',
  operationId: 'objects',
};

export const tool: Tool = {
  name: 'list_objects',
  description: 'returns a listing of all valid Object IDs available to use',
  inputSchema: {
    type: 'object',
    properties: {
      departmentIds: {
        type: 'array',
        description:
          'integers that correspond to department IDs e.g. 1 or 3|9|12, delimited with the | character',
        items: {
          type: 'integer',
        },
      },
      metadataDate: {
        type: 'string',
        description: 'Returns any objects with updated data after this date',
        format: 'date',
      },
    },
  },
};

export const handler = (client: MetMuseum, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.objects.list(body);
};

export default { metadata, tool, handler };
