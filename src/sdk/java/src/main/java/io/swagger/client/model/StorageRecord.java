/*
 * self-managed-osdu
 * Rest API Documentation for Self Managed OSDU
 *
 * OpenAPI spec version: 0.11.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package io.swagger.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.client.model.StorageAcl;
import io.swagger.client.model.StorageLegal;
import io.swagger.client.model.StorageRecordHistory;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Storage record
 */
@ApiModel(description = "Storage record")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2022-01-06T19:52:30.921Z")
public class StorageRecord {
  @SerializedName("id")
  private String id = null;

  @SerializedName("kind")
  private String kind = null;

  @SerializedName("acl")
  private StorageAcl acl = null;

  @SerializedName("legal")
  private StorageLegal legal = null;

  @SerializedName("data")
  private Map<String, Object> data = new HashMap<String, Object>();

  @SerializedName("history")
  private StorageRecordHistory history = null;

  public StorageRecord id(String id) {
    this.id = id;
    return this;
  }

   /**
   * Unique identifier in whole Data Lake. When not provided, Data Lake will create and assign an id to the record. Must follow the naming convention: {OSDU-Account-Id}:{object-type}:{uuid}.
   * @return id
  **/
  @ApiModelProperty(example = "tenant1:well:123456789", value = "Unique identifier in whole Data Lake. When not provided, Data Lake will create and assign an id to the record. Must follow the naming convention: {OSDU-Account-Id}:{object-type}:{uuid}.")
  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public StorageRecord kind(String kind) {
    this.kind = kind;
    return this;
  }

   /**
   * Kind of data it is being ingested. Must follow the naming convention: {OSDU-Account-Id}:{dataset-name}:{record-type}:{version}.
   * @return kind
  **/
  @ApiModelProperty(example = "tenant1:public:well:1.0.2", required = true, value = "Kind of data it is being ingested. Must follow the naming convention: {OSDU-Account-Id}:{dataset-name}:{record-type}:{version}.")
  public String getKind() {
    return kind;
  }

  public void setKind(String kind) {
    this.kind = kind;
  }

  public StorageRecord acl(StorageAcl acl) {
    this.acl = acl;
    return this;
  }

   /**
   * Group of users who have access to the record.
   * @return acl
  **/
  @ApiModelProperty(required = true, value = "Group of users who have access to the record.")
  public StorageAcl getAcl() {
    return acl;
  }

  public void setAcl(StorageAcl acl) {
    this.acl = acl;
  }

  public StorageRecord legal(StorageLegal legal) {
    this.legal = legal;
    return this;
  }

   /**
   * Attributes which represent the legal constraints associated with the record.
   * @return legal
  **/
  @ApiModelProperty(required = true, value = "Attributes which represent the legal constraints associated with the record.")
  public StorageLegal getLegal() {
    return legal;
  }

  public void setLegal(StorageLegal legal) {
    this.legal = legal;
  }

  public StorageRecord data(Map<String, Object> data) {
    this.data = data;
    return this;
  }

  public StorageRecord putDataItem(String key, Object dataItem) {
    this.data.put(key, dataItem);
    return this;
  }

   /**
   * Record payload represented as a list of key-value pairs.
   * @return data
  **/
  @ApiModelProperty(required = true, value = "Record payload represented as a list of key-value pairs.")
  public Map<String, Object> getData() {
    return data;
  }

  public void setData(Map<String, Object> data) {
    this.data = data;
  }

  public StorageRecord history(StorageRecordHistory history) {
    this.history = history;
    return this;
  }

   /**
   * Record ancestry information.
   * @return history
  **/
  @ApiModelProperty(value = "Record ancestry information.")
  public StorageRecordHistory getHistory() {
    return history;
  }

  public void setHistory(StorageRecordHistory history) {
    this.history = history;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    StorageRecord storageRecord = (StorageRecord) o;
    return Objects.equals(this.id, storageRecord.id) &&
        Objects.equals(this.kind, storageRecord.kind) &&
        Objects.equals(this.acl, storageRecord.acl) &&
        Objects.equals(this.legal, storageRecord.legal) &&
        Objects.equals(this.data, storageRecord.data) &&
        Objects.equals(this.history, storageRecord.history);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, kind, acl, legal, data, history);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class StorageRecord {\n");
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    kind: ").append(toIndentedString(kind)).append("\n");
    sb.append("    acl: ").append(toIndentedString(acl)).append("\n");
    sb.append("    legal: ").append(toIndentedString(legal)).append("\n");
    sb.append("    data: ").append(toIndentedString(data)).append("\n");
    sb.append("    history: ").append(toIndentedString(history)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}

