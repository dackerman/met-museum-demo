// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ObjectsAPI from './objects';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Search extends APIResource {
  /**
   * returns a listing of all Object IDs for objects that contain the search query
   * within the object’s data
   */
  list(query: SearchListParams, options?: RequestOptions): APIPromise<ObjectsAPI.Object> {
    return this._client.get('/search', { query, ...options });
  }
}

export interface SearchListParams {
  /**
   * Returns objects that match the query and are designated as highlights.
   * Highlights are selected works of art from The Met Museum’s permanent collection
   * representing different cultures and time periods.
   */
  isHighlight: boolean;

  /**
   * Returns a listing of all Object IDs for objects that contain the search query
   * within the object’s data
   */
  q: string;

  /**
   * Returns objects that match the query, specifically searching against the title
   * field for objects.
   */
  title: boolean;

  /**
   * Returns objects that match the query, specifically searching against the artist
   * name or culture field for objects.
   */
  artistOrCulture?: boolean;

  /**
   * Returns objects that match the query and fall between the dateBegin and dateEnd
   * parameters. Examples include dateBegin=1700&dateEnd=1800
   */
  dateBegin?: number;

  /**
   * Returns objects that match the query and fall between the dateBegin and dateEnd
   * parameters. Examples include dateBegin=1700&dateEnd=1800
   */
  dateEnd?: number;

  /**
   * Returns objects that are a part of a specific department.
   */
  departmentId?: number;

  /**
   * Returns objects that match the query and the specified geographic location.
   * Examples include "Europe", "France", "Paris", "China", "New York", etc.
   */
  geoLocation?: string;

  /**
   * Returns objects that match the query and have images.
   */
  hasImages?: boolean;

  /**
   * Returns objects that match the query and are on view in the museum.
   */
  isOnView?: boolean;

  /**
   * Returns objects that match the query and are of the specified medium or object
   * type. Examples include "Ceramics", "Furniture", "Paintings", "Sculpture",
   * "Textiles", etc.
   */
  medium?: string;

  /**
   * Returns objects that match the query, specifically searching against the subject
   * keyword tags field for objects.
   */
  tags?: boolean;
}

export declare namespace Search {
  export { type SearchListParams as SearchListParams };
}
