/*
 * self-managed-osdu
 * Rest API Documentation for Self Managed OSDU
 *
 * OpenAPI spec version: 0.11.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.21
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/LegalTagDto', 'model/LegalTagDtos', 'model/LegalTagInvalidResponseList', 'model/LegalTagPropertyValues', 'model/LegalTagRequest', 'model/LegalTagUpdateDto'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/LegalTagDto'), require('../model/LegalTagDtos'), require('../model/LegalTagInvalidResponseList'), require('../model/LegalTagPropertyValues'), require('../model/LegalTagRequest'), require('../model/LegalTagUpdateDto'));
  } else {
    // Browser globals (root is window)
    if (!root.SelfManagedOsdu) {
      root.SelfManagedOsdu = {};
    }
    root.SelfManagedOsdu.LegalApi = factory(root.SelfManagedOsdu.ApiClient, root.SelfManagedOsdu.LegalTagDto, root.SelfManagedOsdu.LegalTagDtos, root.SelfManagedOsdu.LegalTagInvalidResponseList, root.SelfManagedOsdu.LegalTagPropertyValues, root.SelfManagedOsdu.LegalTagRequest, root.SelfManagedOsdu.LegalTagUpdateDto);
  }
}(this, function(ApiClient, LegalTagDto, LegalTagDtos, LegalTagInvalidResponseList, LegalTagPropertyValues, LegalTagRequest, LegalTagUpdateDto) {
  'use strict';

  /**
   * Legal service.
   * @module api/LegalApi
   * @version 0.11.0
   */

  /**
   * Constructs a new LegalApi. 
   * @alias module:api/LegalApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createLegalTag operation.
     * @callback module:api/LegalApi~createLegalTagCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LegalTagDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates the LegalTag for the given 'name'.
     * This allows for the creation of your LegalTag. There can only be 1 LegalTag per 'name'. A LegalTag must be created before you can start ingesting data for that name.
     * @param {String} oSDUAccountId Users account e.g. OSDU
     * @param {Object} opts Optional parameters
     * @param {module:model/LegalTagDto} opts.body 
     * @param {String} opts.oSDUOnBehalfOf User's email or auth token
     * @param {module:api/LegalApi~createLegalTagCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LegalTagDto}
     */
    this.createLegalTag = function(oSDUAccountId, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'oSDUAccountId' is set
      if (oSDUAccountId === undefined || oSDUAccountId === null) {
        throw new Error("Missing the required parameter 'oSDUAccountId' when calling createLegalTag");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'OSDU-Account-Id': oSDUAccountId,
        'OSDU-On-Behalf-Of': opts['oSDUOnBehalfOf']
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = LegalTagDto;

      return this.apiClient.callApi(
        '/api/legal/v1/legaltags', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteLegalTag operation.
     * @callback module:api/LegalApi~deleteLegalTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Legal Tag
     * This allows for the deletion of your LegalTag using the 'name' associated with it. 
     * @param {String} dataPartitionId Partition Id
     * @param {String} name 
     * @param {module:api/LegalApi~deleteLegalTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteLegalTag = function(dataPartitionId, name, callback) {
      var postBody = null;

      // verify the required parameter 'dataPartitionId' is set
      if (dataPartitionId === undefined || dataPartitionId === null) {
        throw new Error("Missing the required parameter 'dataPartitionId' when calling deleteLegalTag");
      }

      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling deleteLegalTag");
      }


      var pathParams = {
        'name': name
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'data-partition-id': dataPartitionId
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/legal/v1/legaltags/{name}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getLegalTag operation.
     * @callback module:api/LegalApi~getLegalTagCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LegalTagDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a LegalTag for the given 'name'.
     * This allows for the retrieval of your LegalTag using the 'name' associated with it.
     * @param {String} dataPartitionId Partition Id
     * @param {String} name 
     * @param {module:api/LegalApi~getLegalTagCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LegalTagDto}
     */
    this.getLegalTag = function(dataPartitionId, name, callback) {
      var postBody = null;

      // verify the required parameter 'dataPartitionId' is set
      if (dataPartitionId === undefined || dataPartitionId === null) {
        throw new Error("Missing the required parameter 'dataPartitionId' when calling getLegalTag");
      }

      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling getLegalTag");
      }


      var pathParams = {
        'name': name
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'data-partition-id': dataPartitionId
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = LegalTagDto;

      return this.apiClient.callApi(
        '/api/legal/v1/legaltags/{name}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getLegalTagProperties operation.
     * @callback module:api/LegalApi~getLegalTagPropertiesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LegalTagPropertyValues} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets LegalTag property values.
     * This allows for the retrieval of allowed values for LegalTag properties.
     * @param {String} dataPartitionId Partition Id
     * @param {module:api/LegalApi~getLegalTagPropertiesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LegalTagPropertyValues}
     */
    this.getLegalTagProperties = function(dataPartitionId, callback) {
      var postBody = null;

      // verify the required parameter 'dataPartitionId' is set
      if (dataPartitionId === undefined || dataPartitionId === null) {
        throw new Error("Missing the required parameter 'dataPartitionId' when calling getLegalTagProperties");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'data-partition-id': dataPartitionId
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = LegalTagPropertyValues;

      return this.apiClient.callApi(
        '/api/legal/v1/legaltags:properties', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getLegalTags operation.
     * @callback module:api/LegalApi~getLegalTagsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LegalTagDtos} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves the LegalTags for the given names.
     * This allows for the retrieval of your LegalTags using the 'name' associated with it. A maximum of 25 can be retrieved at once.
     * @param {String} oSDUAccountId Users account e.g. OSDU
     * @param {Object} opts Optional parameters
     * @param {module:model/LegalTagRequest} opts.body 
     * @param {String} opts.oSDUOnBehalfOf User's email or auth token
     * @param {module:api/LegalApi~getLegalTagsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LegalTagDtos}
     */
    this.getLegalTags = function(oSDUAccountId, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'oSDUAccountId' is set
      if (oSDUAccountId === undefined || oSDUAccountId === null) {
        throw new Error("Missing the required parameter 'oSDUAccountId' when calling getLegalTags");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'OSDU-Account-Id': oSDUAccountId,
        'OSDU-On-Behalf-Of': opts['oSDUOnBehalfOf']
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = LegalTagDtos;

      return this.apiClient.callApi(
        '/api/legal/v1/legaltags:batchRetrieve', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listLegalTags operation.
     * @callback module:api/LegalApi~listLegalTagsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LegalTagDtos} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets all LegalTags.
     * This allows for the retrieval of all LegalTags.
     * @param {String} oSDUAccountId Users account e.g. OSDU
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.valid If true returns only valid LegalTags, if false returns only invalid LegalTags.  Default value is true. (default to true)
     * @param {String} opts.oSDUOnBehalfOf User's email or auth token
     * @param {module:api/LegalApi~listLegalTagsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LegalTagDtos}
     */
    this.listLegalTags = function(oSDUAccountId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'oSDUAccountId' is set
      if (oSDUAccountId === undefined || oSDUAccountId === null) {
        throw new Error("Missing the required parameter 'oSDUAccountId' when calling listLegalTags");
      }


      var pathParams = {
      };
      var queryParams = {
        'valid': opts['valid'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'OSDU-Account-Id': oSDUAccountId,
        'OSDU-On-Behalf-Of': opts['oSDUOnBehalfOf']
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = LegalTagDtos;

      return this.apiClient.callApi(
        '/api/legal/v1/legaltags', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateLegalTag operation.
     * @callback module:api/LegalApi~updateLegalTagCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LegalTagDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates the LegalTag for the given 'name'.
     * This allows to update certain properties of your LegalTag using the 'name' associated with it.
     * @param {String} oSDUAccountId Users account e.g. OSDU
     * @param {Object} opts Optional parameters
     * @param {module:model/LegalTagUpdateDto} opts.body 
     * @param {String} opts.oSDUOnBehalfOf User's email or auth token
     * @param {module:api/LegalApi~updateLegalTagCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LegalTagDto}
     */
    this.updateLegalTag = function(oSDUAccountId, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'oSDUAccountId' is set
      if (oSDUAccountId === undefined || oSDUAccountId === null) {
        throw new Error("Missing the required parameter 'oSDUAccountId' when calling updateLegalTag");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'OSDU-Account-Id': oSDUAccountId,
        'OSDU-On-Behalf-Of': opts['oSDUOnBehalfOf']
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = LegalTagDto;

      return this.apiClient.callApi(
        '/api/legal/v1/legaltags', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the validateLegalTags operation.
     * @callback module:api/LegalApi~validateLegalTagsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LegalTagInvalidResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves the invalid LegalTag names with reasons for the given names.
     * This allows for the retrieval of the reason why your LegalTag is not valid. A maximum of 25 can be retrieved at once.
     * @param {String} oSDUAccountId Users account e.g. OSDU
     * @param {Object} opts Optional parameters
     * @param {module:model/LegalTagRequest} opts.body 
     * @param {String} opts.oSDUOnBehalfOf User's email or auth token
     * @param {module:api/LegalApi~validateLegalTagsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LegalTagInvalidResponseList}
     */
    this.validateLegalTags = function(oSDUAccountId, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'oSDUAccountId' is set
      if (oSDUAccountId === undefined || oSDUAccountId === null) {
        throw new Error("Missing the required parameter 'oSDUAccountId' when calling validateLegalTags");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'OSDU-Account-Id': oSDUAccountId,
        'OSDU-On-Behalf-Of': opts['oSDUOnBehalfOf']
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = LegalTagInvalidResponseList;

      return this.apiClient.callApi(
        '/api/legal/v1/legaltags:validate', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
