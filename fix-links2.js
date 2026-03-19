const fs = require('fs');
['index.html', 'plugins.html', 'about.html'].forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');
  ['artifism', 'paymoney'].forEach(prod => {
      let matches = content.match(new RegExp(`href="[^"]*${prod}[^"]*"`, 'gi'));
      if (matches) {
          console.log(file, `links to ${prod}:`, [...new Set(matches)]);
      }
  });
});
