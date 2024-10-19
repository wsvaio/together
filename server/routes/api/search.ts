export default defineEventHandler(async event => {
  const { q, page = 1, pageSize = 20 } = getQuery(event);

  console.log(page);
  const json = await fetch(
    `https://cn.apihz.cn/api/img/apihzbqb.php?id=10001088&key=f9c8b554c2c154b879eae2f3fc28a770&type=2&page=${page}&limit=${pageSize}&words=${q}`
  ).then(data => data.json());

  console.log(json);
  if (json.code != 200)
    return json;
  return {
    code: 200,
    page,
    pageSize,
    total: (json?.count || 0) as number,
    list: (json?.res || []) as string[],
  };
});
