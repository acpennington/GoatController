#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

const stringify = require("@aitodotai/json-stringify-pretty-compact");

const db = require("./db.json");

const sorted = {};
for (const key of Object.keys(db).sort()) {
  sorted[key] = db[key];
}

fs.writeFileSync(path.resolve(__dirname, "db.json"), stringify(sorted, {objectMargins: true, indent: 3}) + "\n");
