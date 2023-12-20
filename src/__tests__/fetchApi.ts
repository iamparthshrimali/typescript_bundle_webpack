import { describe, expect, test,jest } from "@jest/globals";
import { User } from "../types";
// import fetchUser from "../services/fetchUser";
// const getUser = require("../main");
import getUser from "../main"

test("fetching api works with given parameters",async () => {
    const location = {
        ...window.location,
        search: 'userId=3',
      };
    Object.defineProperty(window, 'location', {
        writable: true,
        value:location
      });

    //   getUser().then((user:User)=>{
    
    //     expect(user).toHaveProperty("id")
    //     expect(user).toHaveProperty("title")
    //     expect(user).toHaveProperty("completed")
    //     expect(user.id).toEqual(2)
    //   })
    const user:User=await getUser();
        
        expect(user).toHaveProperty("id")
        expect(user).toHaveProperty("title")
        expect(user).toHaveProperty("completed")
        expect(user.id).toEqual(3)
      
});
