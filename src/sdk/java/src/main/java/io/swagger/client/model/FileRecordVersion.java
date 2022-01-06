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
import io.swagger.client.model.FileAcl;
import io.swagger.client.model.FileLegal;
import io.swagger.client.model.FileLinkList;
import io.swagger.client.model.Files;
import java.io.IOException;

/**
 * Metadata record.
 */
@ApiModel(description = "Metadata record.")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2022-01-06T20:34:20.238Z")
public class FileRecordVersion {
  @SerializedName("id")
  private String id = null;

  @SerializedName("kind")
  private String kind = null;

  @SerializedName("acl")
  private FileAcl acl = null;

  @SerializedName("legal")
  private FileLegal legal = null;

  @SerializedName("data")
  private Files data = null;

  @SerializedName("ancestry")
  private FileLinkList ancestry = null;

  @SerializedName("version")
  private Long version = null;

   /**
   * Unique identifier generated by the system for the file metadata record.
   * @return id
  **/
  @ApiModelProperty(value = "Unique identifier generated by the system for the file metadata record.")
  public String getId() {
    return id;
  }

  public FileRecordVersion kind(String kind) {
    this.kind = kind;
    return this;
  }

   /**
   * Kind of data being ingested. Must follow the naming convention:data-Partition-Id}:dataset-name}:record-type}:version}.
   * @return kind
  **/
  @ApiModelProperty(example = "osdu:wks:dataset--File.Generic:1.0.0", value = "Kind of data being ingested. Must follow the naming convention:data-Partition-Id}:dataset-name}:record-type}:version}.")
  public String getKind() {
    return kind;
  }

  public void setKind(String kind) {
    this.kind = kind;
  }

  public FileRecordVersion acl(FileAcl acl) {
    this.acl = acl;
    return this;
  }

   /**
   * Get acl
   * @return acl
  **/
  @ApiModelProperty(value = "")
  public FileAcl getAcl() {
    return acl;
  }

  public void setAcl(FileAcl acl) {
    this.acl = acl;
  }

  public FileRecordVersion legal(FileLegal legal) {
    this.legal = legal;
    return this;
  }

   /**
   * Get legal
   * @return legal
  **/
  @ApiModelProperty(value = "")
  public FileLegal getLegal() {
    return legal;
  }

  public void setLegal(FileLegal legal) {
    this.legal = legal;
  }

  public FileRecordVersion data(Files data) {
    this.data = data;
    return this;
  }

   /**
   * Get data
   * @return data
  **/
  @ApiModelProperty(value = "")
  public Files getData() {
    return data;
  }

  public void setData(Files data) {
    this.data = data;
  }

  public FileRecordVersion ancestry(FileLinkList ancestry) {
    this.ancestry = ancestry;
    return this;
  }

   /**
   * Get ancestry
   * @return ancestry
  **/
  @ApiModelProperty(value = "")
  public FileLinkList getAncestry() {
    return ancestry;
  }

  public void setAncestry(FileLinkList ancestry) {
    this.ancestry = ancestry;
  }

  public FileRecordVersion version(Long version) {
    this.version = version;
    return this;
  }

   /**
   * The version number of this OSDU resource; set by the framework.
   * @return version
  **/
  @ApiModelProperty(example = "1831253916104085", value = "The version number of this OSDU resource; set by the framework.")
  public Long getVersion() {
    return version;
  }

  public void setVersion(Long version) {
    this.version = version;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    FileRecordVersion fileRecordVersion = (FileRecordVersion) o;
    return Objects.equals(this.id, fileRecordVersion.id) &&
        Objects.equals(this.kind, fileRecordVersion.kind) &&
        Objects.equals(this.acl, fileRecordVersion.acl) &&
        Objects.equals(this.legal, fileRecordVersion.legal) &&
        Objects.equals(this.data, fileRecordVersion.data) &&
        Objects.equals(this.ancestry, fileRecordVersion.ancestry) &&
        Objects.equals(this.version, fileRecordVersion.version);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, kind, acl, legal, data, ancestry, version);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class FileRecordVersion {\n");
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    kind: ").append(toIndentedString(kind)).append("\n");
    sb.append("    acl: ").append(toIndentedString(acl)).append("\n");
    sb.append("    legal: ").append(toIndentedString(legal)).append("\n");
    sb.append("    data: ").append(toIndentedString(data)).append("\n");
    sb.append("    ancestry: ").append(toIndentedString(ancestry)).append("\n");
    sb.append("    version: ").append(toIndentedString(version)).append("\n");
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

