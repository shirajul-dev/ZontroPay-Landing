const fs = require('fs');

const files = ['index.html', 'plugins.html'];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Find occurrences of details_link or local links in the raw HTML / JSON string and replace them with codecanyon links
  
  // Actually, let's just find where href="/paymoney" or href="/artifism" or href="paymoney.html" or href="artifism.html" are used.
  // BUT the user says: "click on any product details then it should be send me to the codecanyon page as like the checkout button clicking going to codecanyon page."

  // What does the Buy Now button's link look like? It points to: https://codecanyon.net/cart/configure_before_adding/XXXX
  // The details link should ideally be https://codecanyon.net/item/XXX/YYYY or simply the same as Buy Now?
  // User says: "send me to the codecanyon page as like the checkout button clicking going to codecanyon page."
  
  // Wait, in previous outputs, we saw products have:
  // "buy_link":"https://codecanyon.net/cart/configure_before_adding/22341650"
  // "details_link":"/paymoney" or local link?
  
  const matches = content.match(/"details_link":"([^"]+)"/g);
  console.log(`Found details links in ${file}:`, matches ? matches.slice(0, 5) : 'None');
});