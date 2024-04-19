const baseUrl = "/";

function encodeQueryData(data) {
  const ret = [];
  for (let d in data) ret.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[d]));
  return ret.join("&");
}

async function getRecommendationAsync(fromLib, page, size) {
  const url =
    baseUrl +
    "recommend?" +
    encodeQueryData({
      fromLib: fromLib,
      page: page,
      size: size,
    });
  const response = await fetch(url);
  return await response.json();
}

async function getRecommendationOneAync(fromLib, toLib) {
  const url =
    baseUrl +
    "recommend-one?" +
    encodeQueryData({
      fromLib: fromLib,
      toLib: toLib,
    });
  const response = await fetch(url);
  return await response.json();
}

async function getLibraryAsync(lib) {
  const url = baseUrl + "library?" + encodeQueryData({ lib: lib });
  const response = await fetch(url);
  return await response.json();
}

async function getLibraryWithPrefixAsync(prefix) {
  const url =
    baseUrl +
    "libraries-with-prefix?" +
    encodeQueryData({
      prefix: prefix,
    });
  const response = await fetch(url);
  return await response.json();
}

async function getLibrarySimilarAsync(libName) {
  const url = baseUrl + "libraries-similar?" + encodeQueryData({ lib: libName });
  const response = await fetch(url);
  return await response.json();
}

async function getConfirmedMigrationsAsync(page, size) {
  const url = baseUrl + "confirmed-migrations?" + encodeQueryData({ page: page, size: size });
  const response = await fetch(url);
  return await response.json();
}

async function getCommitAsync(commitSHA) {
  const url = baseUrl + "commits?" + encodeQueryData({ shas: commitSHA });
  const response = await fetch(url);
  return await response.json();
}

export {
  getRecommendationAsync,
  getRecommendationOneAync,
  getLibraryAsync,
  getLibraryWithPrefixAsync,
  getLibrarySimilarAsync,
  getConfirmedMigrationsAsync,
  getCommitAsync
};
