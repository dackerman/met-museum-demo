// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Fastapi extends APIResource {
  /**
   * Do Thing
   */
  doThing(body: FastapiDoThingParams, options?: RequestOptions): APIPromise<FastapiDoThingResponse> {
    return this._client.post('/fastapi', { body, ...options });
  }
}

export interface FastapiDoThingResponse {
  other_entry: unknown;
}

export interface FastapiDoThingParams {
  entry: unknown;
}

export declare namespace Fastapi {
  export {
    type FastapiDoThingResponse as FastapiDoThingResponse,
    type FastapiDoThingParams as FastapiDoThingParams,
  };
}
