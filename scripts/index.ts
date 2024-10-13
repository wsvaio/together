console.log("hell");

const data = await fetch("https://surl.amap.com/1UeVpYH61u5LH", {
  headers: {
    UserAgent:
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Safari/605.1.15",
    Accept: "*/*"
  },
}).then((data) => data.text());

console.log(data);
