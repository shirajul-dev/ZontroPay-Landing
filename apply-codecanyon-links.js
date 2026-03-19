const fs = require('fs');

function replaceLinks(filePath) {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');

    // For plugins grid links: Convert /plugins/43288879/slug to CodeCanyon item URLs
    let count1 = 0;
    content = content.replace(/href="\/plugins\/([0-9]+)\/([^"]*)"/gi, (match, id, slug) => {
        count1++;
        return `href="https://codecanyon.net/item/${slug}/${id}" target="_blank"`;
    });

    // For absolute header and footer links:
    let count2 = 0;
    content = content.replace(/href="\/?artifism(\.html)?"/gi, () => {
        count2++;
        return `href="https://codecanyon.net/item/artifism-ai-content-image-generator-saas/47251169" target="_blank"`;
    });

    let count3 = 0;
    content = content.replace(/href="\/?paymoney(\.html)?"/gi, () => {
        count3++;
        return `href="https://codecanyon.net/item/paymoney-secure-online-payment-gateway/22341650" target="_blank"`;
    });

    if (count1 || count2 || count3) {
        console.log(`Updated ${filePath}: ${count1} plugin grid links, ${count2} artifism links, ${count3} paymoney links.`);
        fs.writeFileSync(filePath, content);
    }
}

['index.html', 'plugins.html', 'about.html', 'paymoney.html', 'artifism.html', 'support-policy.html', 'terms-conditions.html', 'refund-policy.html'].forEach(replaceLinks);
console.log("Done.");