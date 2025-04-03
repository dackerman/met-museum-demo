// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import MetMuseumDemo from 'Met-Museum-Demo';

export const metadata: Metadata = {
  resource: 'departments',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_departments',
  description: 'returns a listing of all departments',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: MetMuseumDemo, args: any) => {
  const {} = args;
  return client.departments.list();
};

export default { metadata, tool, handler };
