const fetchUser = require("./services/fetchUser.ts");
const queryParameters = require("./services/queryParams");

// import { type User } from "./types";
function getUser(): Promise<any> {
  return fetchUser().then((res: any) => res.json());
}

interface ExtendedWindow extends Window {
  getUser?: () => Promise<any>;
  queryParams?: () => Record<string, string>;
}

// Cast the global object (window in a browser) to your custom interface
const extendedWindow = window as ExtendedWindow;
// getUser().then((user: User) => console.log(user));
// console.log(getUser())

extendedWindow.getUser = getUser;
extendedWindow.queryParams = queryParameters;
// Window.getUser = getUser;
