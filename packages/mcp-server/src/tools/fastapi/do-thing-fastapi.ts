// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import MetMuseumDemo from 'Met-Museum-Demo';

export const metadata: Metadata = {
  resource: 'fastapi',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'do_thing_fastapi',
  description: 'Do Thing',
  inputSchema: {
    type: 'object',
    properties: {
      entry: {
        type: 'object',
        title: 'Entry',
      },
    },
  },
};

export const handler = (client: MetMuseumDemo, args: any) => {
  const { ...body } = args;
  return client.fastapi.doThing(body);
};

export default { metadata, tool, handler };
