import { pool } from "../database/index.mjs";

if (typeof window === "object") {
  // code is running in a browser environment
  console.log("code is running in a browser environment");
} else {
  // code is running in a non-browser environment
  console.log("code is running in a non-browser environment");
}
