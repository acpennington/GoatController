export default function api(errors) {
   let errorString = "";

   for (const error of errors) errorString += error.msg + ". ";

   return errorString.slice(0, -1);
}
