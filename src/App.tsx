import React, { useEffect, useState } from "react";
import { DatalakeServiceClient } from "./generated/grpc-web/tensorbeat/DatalakeServiceClientPb";
import { GetSongsRequest } from "./generated/grpc-web/tensorbeat/datalake_pb";

export const App = () => {
  useEffect(() => {
    const client = new DatalakeServiceClient(
      "http://grpc-web.test.tensorbeat.com"
    );
    let req: GetSongsRequest = new GetSongsRequest();

    client.getSongs(req, null).then((res) => {
      console.log(res.toObject());
    });
  });

  return <div>Hello World</div>;
};

export default App;
