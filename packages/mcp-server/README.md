# Met Museum TypeScript MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Via Claude Desktop

See [the user guide](https://modelcontextprotocol.io/quickstart/user) for setup.

Once it's set up, find your `claude_desktop_config.json` file:

- macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
- Windows: `%APPDATA%\Claude\claude_desktop_config.json`

Add the following value to your `mcpServers` section. Make sure to provide any necessary environment variables (like API keys) as well.

```json
{
  "mcpServers": {
    "dackerman_met_museum_demo_api": {
      "command": "npx",
      "args": ["-y", "git+ssh://git@github.com:dackerman/met-museum-demo.git:packages/mcp-server"],
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

See more information with `--help`:

```sh
$ npx -y git+ssh://git@github.com:dackerman/met-museum-demo.git:packages/mcp-server --help
```

All of these command-line options can be repeated, combined together, and have corresponding exclusion versions (e.g. `--no-tool`).

Use `--list` to see the list of available tools, or see below.

## Available Tools

The following tools are available in this MCP server.

### Resource `fastapi`:

- `do_thing_fastapi` (`write`): Do Thing

### Resource `objects`:

- `retrieve_objects` (`read`): returns a record for an object, containing all open access data about that object, including its image (if the image is available under Open Access)
- `list_objects` (`read`): returns a listing of all valid Object IDs available to use

### Resource `departments`:

- `list_departments` (`read`): returns a listing of all departments

### Resource `search`:

- `list_search` (`read`): returns a listing of all Object IDs for objects that contain the search query within the object’s data
