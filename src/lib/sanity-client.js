

export function createURL (type) {
  let QUERY = encodeURIComponent(`*[_type == "${type}"]`);
  let url = `https://${process.env.NEXT_PUBLIC_PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${process.env.NEXT_PUBLIC_DATASET}?query=${QUERY}`;
  return url;
}


export function grabImage (source) {
    const link = source.asset._ref.slice(6, source.asset._ref.lastIndexOf('-'));
    const filetype = source.asset._ref.slice(source.asset._ref.lastIndexOf('-') + 1, source.asset._ref.lastIndexOf('-') + 4);
    let url =  `https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_PROJECT_ID}/${process.env.NEXT_PUBLIC_DATASET}/${link}.${filetype}?auto=format`;
    return url;
}


export const grabFile = (source) => {
  const ref = source.asset._ref;
  const link = ref.slice(ref.indexOf('-') + 1, ref.lastIndexOf('-'));
  return `https://cdn.sanity.io/files/${process.env.NEXT_PUBLIC_PROJECT_ID}/${process.env.NEXT_PUBLIC_DATASET}/${link}.pdf`;
}


export async function getData(url) {
  console.log(url)
  const res = await fetch(url, {next: {revalidate: 300}});
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json();
}
