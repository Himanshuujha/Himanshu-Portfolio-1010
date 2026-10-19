const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'build');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

fs.copyFileSync(path.join(__dirname, 'index.html'), path.join(outDir, 'index.html'));

const imgDir = path.join(__dirname, 'images');
const outImgDir = path.join(outDir, 'images');
if (fs.existsSync(imgDir)) {
  if (fs.cpSync) {
    fs.cpSync(imgDir, outImgDir, { recursive: true });
  } else {
    // fallback for older node
    if (!fs.existsSync(outImgDir)) fs.mkdirSync(outImgDir, { recursive: true });
    for (const file of fs.readdirSync(imgDir)) {
      fs.copyFileSync(path.join(imgDir, file), path.join(outImgDir, file));
    }
  }
}

console.log('Build complete: static portfolio copied to build/');
