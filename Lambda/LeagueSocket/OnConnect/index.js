// we should use protocol and subprotocol for onconnect function

exports.handler = async (event) => {
   const headers = event.headers;
   if (!headers || !headers["sec-websocket-protocol"]) return { statusCode: 400 };
   else return { statusCode: 200, body: "Connected." };
};
