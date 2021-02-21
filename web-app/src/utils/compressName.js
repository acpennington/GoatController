export default function compress(name) {
   return name.replace(/[^a-zA-Z0-9]/g, "");
}
