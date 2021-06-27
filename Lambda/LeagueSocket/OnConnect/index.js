// we should use protocol and subprotocol for onconnect function

exports.handler = async (event) => {
   const headers = event.headers;
   if (!headers || !headers["Sec-WebSocket-Protocol"]) return { statusCode: 400 };
   else return { statusCode: 200, headers: { "Sec-WebSocket-Protocol": "myprotocol" } };
};
