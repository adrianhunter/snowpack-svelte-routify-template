import * as fs from "fs";

let routesFile = fs
  .readFileSync("./node_modules/@sveltech/routify/tmp/routes.js")
  .toString();

const cwd = process.cwd();
const replace = `${cwd}/src`;
const re = new RegExp(replace, "g");
routesFile = routesFile.replace(re, ".");

routesFile = routesFile.replace(`${cwd}/node_modules/`, "");
routesFile = routesFile.replace('buildRoutes"', 'buildRoutes.js"');

const PackageLocation = "./node_modules/@sveltech/routify/package.json";
let packageJSON = fs.readFileSync(PackageLocation).toString();

packageJSON = packageJSON.replace(
  '"main": "lib/index.js"',
  '"main": "runtime/index.js"'
);

fs.writeFileSync(PackageLocation, packageJSON);

fs.writeFileSync("./src/routes.js", routesFile);
