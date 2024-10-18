export default defineEventHandler(async event => {
  const q = getQuery(event).q;
  const text = await fetch(`https://cn.bing.com/images/search?q=${q}`).then(data => data.text());

  return text.match(/<img.*?>/gis)?.filter(item => item.includes(`${q} 的图像结果`)).map(item => item.replace(/.*src="(.*?)".*/, "$1"));
});
