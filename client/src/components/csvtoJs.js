const fs = require('fs');
const csv = require('csv-parser');

const csvFilePath = 'TROUSERS.csv'; // Replace with the path to your CSV file
const jsFilePath = 'ProductDataT.js'; // Replace with the desired output path for the JavaScript file

const products = [];

fs.createReadStream(csvFilePath)
  .pipe(csv())
  .on('data', (row) => {
    // Assuming your CSV has columns named 'name', 'image', 'price', 'description'
    const product = {
      product_name: row.product_name,
      product_images: row.product_images,
      price: row.price, // Assuming price is a number
      details: row.details,
    };

    products.push(product);
    
  })
  .on('end', () => {
    const jsCode = `const products = ${JSON.stringify(products, null, 2)};\n\nexport default products;`;

    fs.writeFileSync(jsFilePath, jsCode);

    console.log('JavaScript file generated successfully.');
  });
