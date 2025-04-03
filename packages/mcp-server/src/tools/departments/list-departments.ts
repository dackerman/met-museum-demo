// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import MetMuseum from '@dackerman/met-museum-demo';

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

export const handler = (client: MetMuseum, args: any) => {
  const {} = args;
  return client.departments.list();
};

export default { metadata, tool, handler };
