# Met Museum TypeScript MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Direct invocation

You can run the MCP Server directly via `npx`:

```sh
export MET_MUSEUM_DEMO_API_KEY = "My API Key"
npx -y @dackerman-stainless/met-museum-demo-mcp
```

### Via MCP Client

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "dackerman_stainless_met_museum_demo_api": {
      "command": "npx",
      "args": ["-y", "@dackerman-stainless/met-museum-demo-mcp"],
      "env": {
        "MET_MUSEUM_DEMO_API_KEY": "My API Key"
      }
    }
  }
}
```

## Filtering tools

You can run the package on the command line to discover and filter the set of tools that are exposed by the
MCP Server. This can be helpful for large APIs where including all endpoints at once is too much for your AI's
context window.

You can filter by multiple aspects:

- `--tool` includes a specific tool by name
- `--resource` includes all tools under a specific resource, and can have wildcards, e.g. `my.resource*`
- `--operation` includes just read (get/list) or just write operations

See more information with `--help`.

All of these command-line options can be repeated, combined together, and have corresponding exclusion versions (e.g. `--no-tool`).

Use `--list` to see the list of available tools, or see below.

## Importing the tools and server individually

```js
// Import the server, generated endpoints, or the init function
import { server, endpoints, init } from "@dackerman-stainless/met-museum-demo-mcp/server";

// import a specific tool
import retrieveObjects from "@dackerman-stainless/met-museum-demo-mcp/tools/objects/retrieve-objects";

// initialize the server and all endpoints
init({ server, endpoints });

// manually start server
const transport = new StdioServerTransport();
await server.connect(transport);

// or initialize your own server with specific tools
const myServer = new McpServer(...);

// define your own endpoint
const myCustomEndpoint = {
  tool: {
    name: 'my_custom_tool',
    description: 'My custom tool',
    inputSchema: zodToJsonSchema(z.object({ a_property: z.string() })),
  },
  handler: async (client: client, args: any) => {
    return { myResponse: 'Hello world!' };
  })
};

// initialize the server with your custom endpoints
init({ server: myServer, endpoints: [retrieveObjects, myCustomEndpoint] });
```

## Available Tools

The following tools are available in this MCP server.

### Resource `objects`:

- `retrieve_objects` (`read`): returns a record for an object, containing all open access data about that object, including its image (if the image is available under Open Access)
- `list_objects` (`read`): returns a listing of all valid Object IDs available to use

### Resource `departments`:

- `list_departments` (`read`): returns a listing of all departments

### Resource `search`:

- `list_search` (`read`): returns a listing of all Object IDs for objects that contain the search query within the object’s data
