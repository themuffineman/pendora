import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
    publicRoutes: ['/','/dashboard'],
    // Routes that can always be accessed, and have
    // no authentication information
    //ignoredRoutes: ['/no-auth-in-this-route'],

});
