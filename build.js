#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

for (const destination of ["Lambda/GameSocket", "Lambda/LeagueSocket"]) {
  const dst = path.resolve(__dirname, destination, "shared");
  if (!fs.existsSync(dst)) fs.mkdirSync(dst);
  for (const file of fs.readdirSync(path.resolve(__dirname, "shared"))) {
    if (!file.endsWith(".js") && !file.endsWith(".json")) continue;
    fs.copyFileSync(path.resolve(__dirname, "shared", file), path.resolve(dst, file));
  }
}
