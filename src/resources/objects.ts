// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Objects extends APIResource {
  /**
   * returns a record for an object, containing all open access data about that
   * object, including its image (if the image is available under Open Access)
   */
  retrieve(objectID: number, options?: RequestOptions): APIPromise<ObjectRetrieveResponse> {
    return this._client.get(path`/objects/${objectID}`, options);
  }

  /**
   * returns a listing of all valid Object IDs available to use
   */
  list(query: ObjectListParams | null | undefined = {}, options?: RequestOptions): APIPromise<Object> {
    return this._client.get('/objects', { query, ...options });
  }
}

export interface Object {
  objectIDs?: Array<number>;

  total?: number;
}

export interface ObjectRetrieveResponse {
  accessionNumber?: string;

  accessionYear?: string;

  additionalImages?: Array<string>;

  artistAlphaSort?: string;

  artistBeginDate?: string;

  artistDisplayBio?: string;

  artistDisplayName?: string;

  artistEndDate?: string;

  artistGender?: string;

  artistNationality?: string;

  artistPrefix?: string;

  artistRole?: string;

  artistSuffix?: string;

  artistULAN_URL?: string;

  artistWikidata_URL?: string;

  city?: string;

  classification?: string;

  constituents?: Array<ObjectRetrieveResponse.Constituent>;

  country?: string;

  county?: string;

  creditLine?: string;

  culture?: string;

  department?: string;

  dimensions?: string;

  dynasty?: string;

  excavation?: string;

  GalleryNumber?: string;

  geographyType?: string;

  isHighlight?: boolean;

  isPublicDomain?: boolean;

  isTimelineWork?: boolean;

  linkResource?: string;

  locale?: string;

  locus?: string;

  measurements?: Array<ObjectRetrieveResponse.Measurement>;

  medium?: string;

  metadataDate?: string;

  objectBeginDate?: number;

  objectDate?: string;

  objectEndDate?: number;

  objectID?: number;

  objectName?: string;

  objectURL?: string;

  objectWikidata_URL?: string;

  period?: string;

  portfolio?: string;

  primaryImage?: string;

  primaryImageSmall?: string;

  region?: string;

  reign?: string;

  repository?: string;

  rightsAndReproduction?: string;

  river?: string;

  state?: string;

  subregion?: string;

  tags?: Array<ObjectRetrieveResponse.Tag>;

  title?: string;
}

export namespace ObjectRetrieveResponse {
  export interface Constituent {
    constituentID?: number;

    constituentULAN_URL?: string;

    constituentWikidata_URL?: string;

    gender?: string;

    name?: string;

    role?: string;
  }

  export interface Measurement {
    elementDescription?: string;

    elementMeasurements?: Measurement.ElementMeasurements;

    elementName?: string;
  }

  export namespace Measurement {
    export interface ElementMeasurements {
      Height?: number;

      Width?: number;
    }
  }

  export interface Tag {
    AAT_URL?: string;

    term?: string;

    Wikidata_URL?: string;
  }
}

export interface ObjectListParams {
  /**
   * integers that correspond to department IDs e.g. 1 or 3|9|12, delimited with the
   * | character
   */
  departmentIds?: Array<number>;

  /**
   * Returns any objects with updated data after this date
   */
  metadataDate?: string;
}

export declare namespace Objects {
  export {
    type Object as Object,
    type ObjectRetrieveResponse as ObjectRetrieveResponse,
    type ObjectListParams as ObjectListParams,
  };
}
