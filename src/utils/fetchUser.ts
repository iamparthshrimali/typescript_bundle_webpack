import { type User } from "../types";

async function fetchUser(): Promise<any> {
  const queryParams = new URLSearchParams(window.location.search);
  if (!queryParams.has("userId")) {
    console.log("User id is not present in query params");
    throw new Error("User id is not present in query params");
  }
  const userId = queryParams.get("userId");

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${userId}`
  );
  return response
}

module.exports=fetchUser;


