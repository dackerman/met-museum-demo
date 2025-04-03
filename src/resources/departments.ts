// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Departments extends APIResource {
  /**
   * returns a listing of all departments
   */
  list(options?: RequestOptions): APIPromise<DepartmentListResponse> {
    return this._client.get('/departments', options);
  }
}

export interface DepartmentListResponse {
  departments?: Array<DepartmentListResponse.Department>;
}

export namespace DepartmentListResponse {
  export interface Department {
    departmentId?: number;

    displayName?: string;
  }
}

export declare namespace Departments {
  export { type DepartmentListResponse as DepartmentListResponse };
}
