import * as jspb from 'google-protobuf'

import * as tensorbeat_common_pb from '../tensorbeat/common_pb';


export class GetSongsRequest extends jspb.Message {
  getMetadataMap(): jspb.Map<string, string>;
  clearMetadataMap(): GetSongsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSongsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSongsRequest): GetSongsRequest.AsObject;
  static serializeBinaryToWriter(message: GetSongsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSongsRequest;
  static deserializeBinaryFromReader(message: GetSongsRequest, reader: jspb.BinaryReader): GetSongsRequest;
}

export namespace GetSongsRequest {
  export type AsObject = {
    metadataMap: Array<[string, string]>,
  }
}

export class GetSongsResponse extends jspb.Message {
  getSongsList(): Array<tensorbeat_common_pb.File>;
  setSongsList(value: Array<tensorbeat_common_pb.File>): GetSongsResponse;
  clearSongsList(): GetSongsResponse;
  addSongs(value?: tensorbeat_common_pb.File, index?: number): tensorbeat_common_pb.File;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSongsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSongsResponse): GetSongsResponse.AsObject;
  static serializeBinaryToWriter(message: GetSongsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSongsResponse;
  static deserializeBinaryFromReader(message: GetSongsResponse, reader: jspb.BinaryReader): GetSongsResponse;
}

export namespace GetSongsResponse {
  export type AsObject = {
    songsList: Array<tensorbeat_common_pb.File.AsObject>,
  }
}

export class AddSongsRequest extends jspb.Message {
  getSongsList(): Array<tensorbeat_common_pb.File>;
  setSongsList(value: Array<tensorbeat_common_pb.File>): AddSongsRequest;
  clearSongsList(): AddSongsRequest;
  addSongs(value?: tensorbeat_common_pb.File, index?: number): tensorbeat_common_pb.File;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddSongsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddSongsRequest): AddSongsRequest.AsObject;
  static serializeBinaryToWriter(message: AddSongsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddSongsRequest;
  static deserializeBinaryFromReader(message: AddSongsRequest, reader: jspb.BinaryReader): AddSongsRequest;
}

export namespace AddSongsRequest {
  export type AsObject = {
    songsList: Array<tensorbeat_common_pb.File.AsObject>,
  }
}

export class AddSongsResponse extends jspb.Message {
  getSuccessful(): boolean;
  setSuccessful(value: boolean): AddSongsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddSongsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddSongsResponse): AddSongsResponse.AsObject;
  static serializeBinaryToWriter(message: AddSongsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddSongsResponse;
  static deserializeBinaryFromReader(message: AddSongsResponse, reader: jspb.BinaryReader): AddSongsResponse;
}

export namespace AddSongsResponse {
  export type AsObject = {
    successful: boolean,
  }
}

