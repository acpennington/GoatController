// @route GET api/users
// @desc Get another user's info
// @access Public
// @db 1 read, 0 writes
async function get(body) {
   const { username } = body;
   const errors = [];

   // Username validation
   if (username.length < 1) errors.push({ msg: "Username is required" });

   if (errors.length > 0)
      return {
         statusCode: 400,
         body: { errors },
      };

   const params = {
      TableName: "users",
      Key: {
         username,
      },
   };

   const result = await DynamoDB.get(params, (err) => {
      if (err)
         return {
            statusCode: 400,
            body: { errors: [err] },
         };
   }).promise();
   const user = result.Item;

   if (user) return res.json({ joinDate: user.joinDate });
   else return res.status(400).json({ errors: [{ msg: "User not found" }] });
}

module.exports = get;
