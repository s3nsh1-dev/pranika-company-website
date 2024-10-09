// const { SitemapStream, streamToPromise } = require("sitemap");
// const { Readable } = require("stream");
// const fs = require("fs");

// // Read the list of URLs from a text file
// const urlsFilePath = "./listofurls.txt";
// const urls = fs
//   .readFileSync(urlsFilePath, "utf-8")
//   .split("\n")
//   .map((url) => {
//     const trimmedUrl = url.trim();
//     return trimmedUrl
//       ? { url: trimmedUrl, changefreq: "daily", priority: 0.7 }
//       : null;
//   })
//   .filter(Boolean); // Filter out any null values

// // Create a stream to write to
// const stream = new SitemapStream({ hostname: "https://www.pranikatech.com/" });

// // Generate the sitemap
// streamToPromise(Readable.from(urls).pipe(stream))
//   .then((data) => {
//     // Write the generated sitemap to a file
//     fs.writeFileSync("../../public/sitemap.xml", data.toString());
//     console.log("Sitemap created: /public/sitemap.xml");
//   })
//   .catch((err) => {
//     console.error("Error generating sitemap:", err);
//   });
// -----------------------------------------------------
const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");
const fs = require("fs");

// List of URLs without any extra characters like spaces
const links = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/home", changefreq: "daily", priority: 0.9 },
  { url: "/contact", changefreq: "monthly", priority: 0.7 },
  { url: "/mission&vision", changefreq: "monthly", priority: 0.7 },
  { url: "/careers", changefreq: "monthly", priority: 0.7 },
  { url: "/about", changefreq: "monthly", priority: 0.7 },
  { url: "/data-analytics", changefreq: "monthly", priority: 0.7 },
  { url: "/data-operations", changefreq: "monthly", priority: 0.7 },
  { url: "/digital-marketing", changefreq: "monthly", priority: 0.7 },
  { url: "/teamsummary", changefreq: "monthly", priority: 0.7 },
  { url: "/comingsoon", changefreq: "monthly", priority: 0.7 },
  { url: "/training", changefreq: "monthly", priority: 0.7 },
  { url: "/job-support-india", changefreq: "monthly", priority: 0.7 },
  { url: "/data-transformation", changefreq: "monthly", priority: 0.7 },
  { url: "/consult-recruit", changefreq: "monthly", priority: 0.7 },
  { url: "/test", changefreq: "monthly", priority: 0.7 },
];

// Create a stream to write the sitemap
const stream = new SitemapStream({ hostname: "https://www.pranikatech.com" });

// Generate the sitemap and write it to the file
streamToPromise(Readable.from(links).pipe(stream))
  .then((data) => {
    fs.writeFileSync("../../public/sitemap.xml", data.toString());
    console.log("Sitemap successfully created at /public/sitemap.xml");
  })
  .catch((err) => {
    console.error("Error generating sitemap:", err);
  });
