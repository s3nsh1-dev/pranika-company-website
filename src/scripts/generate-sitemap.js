const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");
const fs = require("fs");

// Read the list of URLs from a text file
const urlsFilePath = "./listofurls.txt";
const urls = fs
  .readFileSync(urlsFilePath, "utf-8")
  .split("\n")
  .map((url) => {
    const trimmedUrl = url.trim();
    return trimmedUrl
      ? { url: trimmedUrl, changefreq: "daily", priority: 0.7 }
      : null;
  })
  .filter(Boolean); // Filter out any null values

// Create a stream to write to
const stream = new SitemapStream({ hostname: "https://www.pranikatech.com/" });

// Generate the sitemap
streamToPromise(Readable.from(urls).pipe(stream))
  .then((data) => {
    // Write the generated sitemap to a file
    fs.writeFileSync("../../public/sitemap.xml", data.toString());
    console.log("Sitemap created: /public/sitemap.xml");
  })
  .catch((err) => {
    console.error("Error generating sitemap:", err);
  });
