async function getData(apiurl) {
  const sec = parseInt(process.env.REVALIDATE_SEC) || 20;
  const res = await fetch(apiurl, {
    next: { revalidate: sec },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const json = await res.json();
  return json.data;
}

export async function getSetting() {
  const apiurl = process.env.API_DOMAIN + '/items/setting';
  return getData(apiurl);
}

export async function getHome() {
  const apiurl = process.env.API_DOMAIN + '/items/home';
  return getData(apiurl);
}

export async function getPage(slug) {
  const apiurl = process.env.API_DOMAIN + '/items/page/' + slug;
  return getData(apiurl);
}

export async function getPost(slug) {
  const apiurl =
    process.env.API_DOMAIN + '/items/blog/?limit=1&filter[slug][_eq]=' + slug;
  return getData(apiurl);
}

export async function getPosts(limit = 6) {
  const apiurl =
    process.env.API_DOMAIN +
    '/items/blog/?fields=*.*,author.avatar.*&sort=-publish_date&limit=' +
    limit;
  return getData(apiurl);
}
