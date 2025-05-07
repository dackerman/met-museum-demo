// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import MetMuseum from '@dackerman-stainless/met-museum-demo';

export const metadata: Metadata = {
  resource: 'search',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_search',
  description:
    'returns a listing of all Object IDs for objects that contain the search query within the object’s data',
  inputSchema: {
    type: 'object',
    properties: {
      isHighlight: {
        type: 'boolean',
        description:
          'Returns objects that match the query and are designated as highlights. Highlights are selected works of art from The Met Museum’s permanent collection representing different cultures and time periods.',
      },
      q: {
        type: 'string',
        description:
          'Returns a listing of all Object IDs for objects that contain the search query within the object’s data',
      },
      title: {
        type: 'boolean',
        description:
          'Returns objects that match the query, specifically searching against the title field for objects.',
      },
      artistOrCulture: {
        type: 'boolean',
        description:
          'Returns objects that match the query, specifically searching against the artist name or culture field for objects.',
      },
      dateBegin: {
        type: 'integer',
        description:
          'Returns objects that match the query and fall between the dateBegin and dateEnd parameters. Examples include dateBegin=1700&dateEnd=1800',
      },
      dateEnd: {
        type: 'integer',
        description:
          'Returns objects that match the query and fall between the dateBegin and dateEnd parameters. Examples include dateBegin=1700&dateEnd=1800',
      },
      departmentId: {
        type: 'integer',
        description: 'Returns objects that are a part of a specific department.',
      },
      geoLocation: {
        type: 'string',
        description:
          'Returns objects that match the query and the specified geographic location. Examples include "Europe", "France", "Paris", "China", "New York", etc.',
      },
      hasImages: {
        type: 'boolean',
        description: 'Returns objects that match the query and have images.',
      },
      isOnView: {
        type: 'boolean',
        description: 'Returns objects that match the query and are on view in the museum.',
      },
      medium: {
        type: 'string',
        description:
          'Returns objects that match the query and are of the specified medium or object type. Examples include "Ceramics", "Furniture", "Paintings", "Sculpture", "Textiles", etc.',
      },
      tags: {
        type: 'boolean',
        description:
          'Returns objects that match the query, specifically searching against the subject keyword tags field for objects.',
      },
    },
  },
};

export const handler = (client: MetMuseum, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.search.list(body);
};

export default { metadata, tool, handler };
