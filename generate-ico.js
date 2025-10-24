// generate-ico.js
import fs from "fs";
import pngToIco from "png-to-ico";

pngToIco([
    "public/favicon-192.png",
    "public/favicon-512.png"
]).then(buf => {
    fs.writeFileSync("public/favicon.ico", buf);
    console.log("✅ favicon.ico created");
});
