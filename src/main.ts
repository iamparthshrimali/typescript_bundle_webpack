const fetchUser = require("./services/fetchUser.ts");
// const {getQueryParams} = require("./services/queryParams");
import {getQueryParams } from './services/queryParams'

// import { type User } from "./types";
export default function getUser(): Promise<any> {
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
extendedWindow.queryParams = getQueryParams;
// Window.getUser = getUser;
