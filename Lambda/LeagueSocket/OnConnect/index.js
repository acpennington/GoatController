exports.handler = async (event) => {
   // we should use protocol and subprotocol for onconnect function

   return { statusCode: 200, body: "Connected." };
};
