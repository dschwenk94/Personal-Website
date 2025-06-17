const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// Install sharp package if not already installed
console.log('Installing required packages...');
exec('npm install sharp', (err, stdout, stderr) => {
  if (err) {
    console.error('Error installing packages:', err);
    return;
  }
  
  const sharp = require('sharp');
  const svgPath = path.join(__dirname, 'public', 'favicon.svg');
  const pngPath16 = path.join(__dirname, 'public', 'favicon-16x16.png');
  const pngPath32 = path.join(__dirname, 'public', 'favicon-32x32.png');
  const pngPath192 = path.join(__dirname, 'public', 'logo192.png');
  const pngPath512 = path.join(__dirname, 'public', 'logo512.png');
  
  console.log('Converting SVG to PNG at different sizes...');
  
  // Create the 16x16 PNG
  sharp(svgPath)
    .resize(16, 16)
    .png()
    .toFile(pngPath16)
    .then(() => console.log('Created 16x16 favicon'))
    .catch(err => console.error('Error creating 16x16 favicon:', err));
  
  // Create the 32x32 PNG
  sharp(svgPath)
    .resize(32, 32)
    .png()
    .toFile(pngPath32)
    .then(() => console.log('Created 32x32 favicon'))
    .catch(err => console.error('Error creating 32x32 favicon:', err));
  
  // Create the 192x192 PNG for PWA
  sharp(svgPath)
    .resize(192, 192)
    .png()
    .toFile(pngPath192)
    .then(() => console.log('Created 192x192 logo'))
    .catch(err => console.error('Error creating 192x192 logo:', err));
  
  // Create the 512x512 PNG for PWA
  sharp(svgPath)
    .resize(512, 512)
    .png()
    .toFile(pngPath512)
    .then(() => console.log('Created 512x512 logo'))
    .catch(err => console.error('Error creating 512x512 logo:', err));
  
  // Now we'll use the 32x32 PNG to create the favicon.ico
  // Install ico-converter if not already installed
  exec('npm install ico-converter', (err, stdout, stderr) => {
    if (err) {
      console.error('Error installing ico-converter:', err);
      return;
    }
    
    console.log('Creating favicon.ico...');
    const icoPath = path.join(__dirname, 'public', 'favicon.ico');
    
    // Wait a bit for the PNGs to be created
    setTimeout(() => {
      // Use the ico-converter package via CLI
      exec(`npx ico-converter ${pngPath32} ${icoPath}`, (err, stdout, stderr) => {
        if (err) {
          console.error('Error creating favicon.ico:', err);
          return;
        }
        console.log('Successfully created favicon.ico');
      });
    }, 2000);
  });
});
