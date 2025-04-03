// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MetMuseum from '@dackerman-stainless/met-museum-demo';

const client = new MetMuseum({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource search', () => {
  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = client.search.list({ isHighlight: true, q: 'q', title: true });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: required and optional params', async () => {
    const response = await client.search.list({
      isHighlight: true,
      q: 'q',
      title: true,
      artistOrCulture: true,
      dateBegin: 0,
      dateEnd: 0,
      departmentId: 0,
      geoLocation: 'geoLocation',
      hasImages: true,
      isOnView: true,
      medium: 'medium',
      tags: true,
    });
  });
});
