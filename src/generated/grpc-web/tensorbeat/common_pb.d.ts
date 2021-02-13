import * as jspb from 'google-protobuf'



export class File extends jspb.Message {
  getUri(): string;
  setUri(value: string): File;

  getMetadataMap(): jspb.Map<string, string>;
  clearMetadataMap(): File;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): File.AsObject;
  static toObject(includeInstance: boolean, msg: File): File.AsObject;
  static serializeBinaryToWriter(message: File, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): File;
  static deserializeBinaryFromReader(message: File, reader: jspb.BinaryReader): File;
}

export namespace File {
  export type AsObject = {
    uri: string,
    metadataMap: Array<[string, string]>,
  }
}

