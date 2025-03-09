// This file will prepare the package.json for export
// "main" is required to export the compiled source but also by expo
// because of this we set it to what is required by expo until export

const fs = require("node:fs");

const FILENAME = "./package.json";
const PROPERTY = "export-properties";

let data = JSON.parse(fs.readFileSync(FILENAME, "utf8"));
if (data[PROPERTY]) {
    data = {
        ...data,
        ...data[PROPERTY],
    };
    delete data[PROPERTY];
}

const buffer = JSON.stringify(data, null, 4);
fs.writeFileSync(FILENAME, buffer);
