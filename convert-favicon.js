// convert-favicon.js
import fs from "fs";
import sharp from "sharp";

// input SVG
const svg = fs.readFileSync("./public/favicon.svg");

// desired sizes
const sizes = [192, 512];

for (const size of sizes) {
    sharp(svg)
        .resize(size, size)
        .png()
        .toFile(`./public/favicon-${size}.png`)
        .then(() => console.log(`✅ favicon-${size}.png generated`))
        .catch(err => console.error(err));
}
