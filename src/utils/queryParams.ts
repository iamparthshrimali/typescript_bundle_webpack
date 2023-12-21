function getQueryParams(): Record<string, string> {
  const queryParams = new URLSearchParams(window.location.search);
  let params: Record<string, string> = {};
  queryParams.forEach((value, key: string) => {
    params[key] = value;
  });
  return params;
}

export  {getQueryParams}
// module.exports = getQueryParams;
