// source: tensorbeat/datalake.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
// @ts-ignore
var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var tensorbeat_common_pb = require('../tensorbeat/common_pb.js');
goog.object.extend(proto, tensorbeat_common_pb);
goog.exportSymbol('proto.tensorbeat.datalake.AddSongsRequest', null, global);
goog.exportSymbol('proto.tensorbeat.datalake.AddSongsResponse', null, global);
goog.exportSymbol('proto.tensorbeat.datalake.GetSongsRequest', null, global);
goog.exportSymbol('proto.tensorbeat.datalake.GetSongsResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tensorbeat.datalake.GetSongsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tensorbeat.datalake.GetSongsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tensorbeat.datalake.GetSongsRequest.displayName = 'proto.tensorbeat.datalake.GetSongsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tensorbeat.datalake.GetSongsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tensorbeat.datalake.GetSongsResponse.repeatedFields_, null);
};
goog.inherits(proto.tensorbeat.datalake.GetSongsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tensorbeat.datalake.GetSongsResponse.displayName = 'proto.tensorbeat.datalake.GetSongsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tensorbeat.datalake.AddSongsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tensorbeat.datalake.AddSongsRequest.repeatedFields_, null);
};
goog.inherits(proto.tensorbeat.datalake.AddSongsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tensorbeat.datalake.AddSongsRequest.displayName = 'proto.tensorbeat.datalake.AddSongsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tensorbeat.datalake.AddSongsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tensorbeat.datalake.AddSongsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tensorbeat.datalake.AddSongsResponse.displayName = 'proto.tensorbeat.datalake.AddSongsResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tensorbeat.datalake.GetSongsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorbeat.datalake.GetSongsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorbeat.datalake.GetSongsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorbeat.datalake.GetSongsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadataMap: (f = msg.getMetadataMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tensorbeat.datalake.GetSongsRequest}
 */
proto.tensorbeat.datalake.GetSongsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorbeat.datalake.GetSongsRequest;
  return proto.tensorbeat.datalake.GetSongsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorbeat.datalake.GetSongsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorbeat.datalake.GetSongsRequest}
 */
proto.tensorbeat.datalake.GetSongsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getMetadataMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tensorbeat.datalake.GetSongsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorbeat.datalake.GetSongsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorbeat.datalake.GetSongsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorbeat.datalake.GetSongsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMetadataMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * map<string, string> metadata = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.tensorbeat.datalake.GetSongsRequest.prototype.getMetadataMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.tensorbeat.datalake.GetSongsRequest} returns this
 */
proto.tensorbeat.datalake.GetSongsRequest.prototype.clearMetadataMap = function() {
  this.getMetadataMap().clear();
  return this;};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tensorbeat.datalake.GetSongsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tensorbeat.datalake.GetSongsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorbeat.datalake.GetSongsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorbeat.datalake.GetSongsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorbeat.datalake.GetSongsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    songsList: jspb.Message.toObjectList(msg.getSongsList(),
    tensorbeat_common_pb.File.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tensorbeat.datalake.GetSongsResponse}
 */
proto.tensorbeat.datalake.GetSongsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorbeat.datalake.GetSongsResponse;
  return proto.tensorbeat.datalake.GetSongsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorbeat.datalake.GetSongsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorbeat.datalake.GetSongsResponse}
 */
proto.tensorbeat.datalake.GetSongsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new tensorbeat_common_pb.File;
      reader.readMessage(value,tensorbeat_common_pb.File.deserializeBinaryFromReader);
      msg.addSongs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tensorbeat.datalake.GetSongsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorbeat.datalake.GetSongsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorbeat.datalake.GetSongsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorbeat.datalake.GetSongsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSongsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      tensorbeat_common_pb.File.serializeBinaryToWriter
    );
  }
};


/**
 * repeated tensorbeat.common.File songs = 1;
 * @return {!Array<!proto.tensorbeat.common.File>}
 */
proto.tensorbeat.datalake.GetSongsResponse.prototype.getSongsList = function() {
  return /** @type{!Array<!proto.tensorbeat.common.File>} */ (
    jspb.Message.getRepeatedWrapperField(this, tensorbeat_common_pb.File, 1));
};


/**
 * @param {!Array<!proto.tensorbeat.common.File>} value
 * @return {!proto.tensorbeat.datalake.GetSongsResponse} returns this
*/
proto.tensorbeat.datalake.GetSongsResponse.prototype.setSongsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tensorbeat.common.File=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tensorbeat.common.File}
 */
proto.tensorbeat.datalake.GetSongsResponse.prototype.addSongs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tensorbeat.common.File, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tensorbeat.datalake.GetSongsResponse} returns this
 */
proto.tensorbeat.datalake.GetSongsResponse.prototype.clearSongsList = function() {
  return this.setSongsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tensorbeat.datalake.AddSongsRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tensorbeat.datalake.AddSongsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorbeat.datalake.AddSongsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorbeat.datalake.AddSongsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorbeat.datalake.AddSongsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    songsList: jspb.Message.toObjectList(msg.getSongsList(),
    tensorbeat_common_pb.File.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tensorbeat.datalake.AddSongsRequest}
 */
proto.tensorbeat.datalake.AddSongsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorbeat.datalake.AddSongsRequest;
  return proto.tensorbeat.datalake.AddSongsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorbeat.datalake.AddSongsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorbeat.datalake.AddSongsRequest}
 */
proto.tensorbeat.datalake.AddSongsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new tensorbeat_common_pb.File;
      reader.readMessage(value,tensorbeat_common_pb.File.deserializeBinaryFromReader);
      msg.addSongs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tensorbeat.datalake.AddSongsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorbeat.datalake.AddSongsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorbeat.datalake.AddSongsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorbeat.datalake.AddSongsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSongsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      tensorbeat_common_pb.File.serializeBinaryToWriter
    );
  }
};


/**
 * repeated tensorbeat.common.File songs = 1;
 * @return {!Array<!proto.tensorbeat.common.File>}
 */
proto.tensorbeat.datalake.AddSongsRequest.prototype.getSongsList = function() {
  return /** @type{!Array<!proto.tensorbeat.common.File>} */ (
    jspb.Message.getRepeatedWrapperField(this, tensorbeat_common_pb.File, 1));
};


/**
 * @param {!Array<!proto.tensorbeat.common.File>} value
 * @return {!proto.tensorbeat.datalake.AddSongsRequest} returns this
*/
proto.tensorbeat.datalake.AddSongsRequest.prototype.setSongsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tensorbeat.common.File=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tensorbeat.common.File}
 */
proto.tensorbeat.datalake.AddSongsRequest.prototype.addSongs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tensorbeat.common.File, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tensorbeat.datalake.AddSongsRequest} returns this
 */
proto.tensorbeat.datalake.AddSongsRequest.prototype.clearSongsList = function() {
  return this.setSongsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tensorbeat.datalake.AddSongsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorbeat.datalake.AddSongsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorbeat.datalake.AddSongsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorbeat.datalake.AddSongsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    successful: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tensorbeat.datalake.AddSongsResponse}
 */
proto.tensorbeat.datalake.AddSongsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorbeat.datalake.AddSongsResponse;
  return proto.tensorbeat.datalake.AddSongsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorbeat.datalake.AddSongsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorbeat.datalake.AddSongsResponse}
 */
proto.tensorbeat.datalake.AddSongsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccessful(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tensorbeat.datalake.AddSongsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorbeat.datalake.AddSongsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorbeat.datalake.AddSongsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorbeat.datalake.AddSongsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccessful();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool successful = 1;
 * @return {boolean}
 */
proto.tensorbeat.datalake.AddSongsResponse.prototype.getSuccessful = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.tensorbeat.datalake.AddSongsResponse} returns this
 */
proto.tensorbeat.datalake.AddSongsResponse.prototype.setSuccessful = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


goog.object.extend(exports, proto.tensorbeat.datalake);
