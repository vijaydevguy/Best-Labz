/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://bestlabz.vercel.app',  // ✅ Replace with your actual site URL
  generateRobotsTxt: true,            // ✅ Will create /robots.txt
  generateIndexSitemap: true,
  sitemapSize: 5000,
  // outDir: './out',
  outDir: './public', // ✅ Put sitemap files in public folder
}


// module.exports = {
//   siteUrl: "https://bestlabz.vercel.app/",
//   generateRobotsTxt: true,
// };
