module.exports = {
   apps : [
       {
           name    : "api-fnol",
           script  : "npm",
           args    : "run dev",
           env: {
              "NODE_ENV": "development"
          }
           //env variables set in npm scripts (package.json)
       }
   ]
}
