// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import MetMuseumDemo from 'Met-Museum-Demo';

export const metadata: Metadata = {
  resource: 'objects',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_objects',
  description:
    'returns a record for an object, containing all open access data about that object, including its image (if the image is available under Open Access)',
  inputSchema: {
    type: 'object',
    properties: {
      objectId: {
        type: 'integer',
      },
    },
  },
};

export const handler = (client: MetMuseumDemo, args: any) => {
  const { objectId } = args;
  return client.objects.retrieve(objectId);
};

export default { metadata, tool, handler };
