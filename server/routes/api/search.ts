// export default defineEventHandler(async event => {
//   const { q, page = 1, pageSize = 20 } = getQuery(event);

//   const json: Record<any, any> = await fetch(
//     `https://cn.apihz.cn/api/img/apihzbqb.php?id=10001088&key=f9c8b554c2c154b879eae2f3fc28a770&type=2&page=${page}&limit=${pageSize}&words=${q}`,
//     {
//       // 'headers':
//     }
//   ).then(data => data.json());

//   const resutl = await proxyRequest(event, `https://cn.apihz.cn/api/img/apihzbqb.php?id=10001088&key=f9c8b554c2c154b879eae2f3fc28a770&type=2&page=${page}&limit=${pageSize}&words=${q}`);

//   console.log(resutl, "djsfjlsdjflsj");

//   return resutl;

//   if (json.code != 200)
//     return json;
//   return {
//     code: 200,
//     page,
//     pageSize,
//     total: (json?.count || 0) as number,
//     list: (json?.res || []) as string[],
//   };
// });

export default defineEventHandler(async event => {
  const { q, page = 1, pageSize = 20 } = getQuery(event);
  return await proxyRequest(event, `http://49.234.56.78/api/img/apihzbqb.php?id=10001088&key=f9c8b554c2c154b879eae2f3fc28a770&type=2&page=${page}&limit=${pageSize}&words=${q}`);
});
