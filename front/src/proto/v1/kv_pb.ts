// Copyright (c) HashiCorp, Inc.
// SPDX-License-Identifier: MPL-2.0

// @generated by protoc-gen-es v1.6.0 with parameter "target=ts"
// @generated from file proto/v1/kv.proto (package proto.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message proto.v1.GetRequest
 */
export class GetRequest extends Message<GetRequest> {
  /**
   * @generated from field: string key = 1;
   */
  key = "";

  constructor(data?: PartialMessage<GetRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "proto.v1.GetRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetRequest {
    return new GetRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetRequest {
    return new GetRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetRequest {
    return new GetRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetRequest | PlainMessage<GetRequest> | undefined, b: GetRequest | PlainMessage<GetRequest> | undefined): boolean {
    return proto3.util.equals(GetRequest, a, b);
  }
}

/**
 * @generated from message proto.v1.GetResponse
 */
export class GetResponse extends Message<GetResponse> {
  /**
   * @generated from field: bytes value = 1;
   */
  value = new Uint8Array(0);

  constructor(data?: PartialMessage<GetResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "proto.v1.GetResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "value", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetResponse {
    return new GetResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetResponse {
    return new GetResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetResponse {
    return new GetResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetResponse | PlainMessage<GetResponse> | undefined, b: GetResponse | PlainMessage<GetResponse> | undefined): boolean {
    return proto3.util.equals(GetResponse, a, b);
  }
}

/**
 * @generated from message proto.v1.PutRequest
 */
export class PutRequest extends Message<PutRequest> {
  /**
   * @generated from field: string key = 1;
   */
  key = "";

  /**
   * @generated from field: bytes value = 2;
   */
  value = new Uint8Array(0);

  constructor(data?: PartialMessage<PutRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "proto.v1.PutRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "value", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PutRequest {
    return new PutRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PutRequest {
    return new PutRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PutRequest {
    return new PutRequest().fromJsonString(jsonString, options);
  }

  static equals(a: PutRequest | PlainMessage<PutRequest> | undefined, b: PutRequest | PlainMessage<PutRequest> | undefined): boolean {
    return proto3.util.equals(PutRequest, a, b);
  }
}

/**
 * @generated from message proto.v1.PutResponse
 */
export class PutResponse extends Message<PutResponse> {
  /**
   * @generated from field: bytes value = 1;
   */
  value = new Uint8Array(0);

  constructor(data?: PartialMessage<PutResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "proto.v1.PutResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "value", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PutResponse {
    return new PutResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PutResponse {
    return new PutResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PutResponse {
    return new PutResponse().fromJsonString(jsonString, options);
  }

  static equals(a: PutResponse | PlainMessage<PutResponse> | undefined, b: PutResponse | PlainMessage<PutResponse> | undefined): boolean {
    return proto3.util.equals(PutResponse, a, b);
  }
}

