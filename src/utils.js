export const getUrlInfo = url => {
  const urlSplits = url.split('/');
  return {
    domain: urlSplits[2],
    filename: urlSplits[urlSplits.length - 1],
    url
  };
};

export const parseSize = headers => {
  const contentInfo = headers.find(({ name }) => name === 'content-length');
  if (!contentInfo) {
    return 0;
  }
  return Number((contentInfo.value / 1000).toFixed(2));
};

export const getContentType = headers => {
  const contentInfo = headers.find(({ name }) => name === 'content-type');
  if (!contentInfo) {
    return '';
  }
  const type = contentInfo.value.split(';')[0].split('/');
  return type.length > 1 ? type[1] : type[0];
};

export const prepareViewerData = entries =>
  entries
  .filter(entry => entry.response)
  .map(entry => ({
    status: entry.response.status,
    method: entry.request.method,
    size: parseSize(entry.response.headers),
    startedDateTime: entry.startedDateTime,
    type: getContentType(entry.response.headers),
    ...getUrlInfo(entry.request.url)
  }));

export const sortBy = (data, key, isAsc = true) =>
  data.sort((prev, next) => {
    if (prev[key] < next[key]) {
      return isAsc ? -1 : 1;
    }
    if (prev[key] > next[key]) {
      return isAsc ? 1 : 1;
    }
    return 0;
  });

export const filterData = (data, filter) => {
  const { search, key, value } = filter;
  const trimmedSearch = search.trim();

  return !trimmedSearch && !key
    ? data
    : data.filter(info => {
      const isSearchMatched = trimmedSearch ? info.filename.includes(trimmedSearch) : true;
      const isFilterMatched = key ? info[key] === value : true;
      return isSearchMatched && isFilterMatched;
    });
};
