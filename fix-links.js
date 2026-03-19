const fs = require('fs');
['index.html', 'plugins.html', 'about.html', 'paymoney.html'].forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');
  let matches = content.match(/href="\/plugins\/[0-9]+\/[^"]*"/gi);
  if (matches) {
     console.log(file, 'has', matches.length, 'matches of /plugins/ID/slug');
     console.log(matches.slice(0, 5));
  }
});
