export default function apiStage() {
   return process.env.NODE_ENV === "production" ? "prod" : "dev";
}
