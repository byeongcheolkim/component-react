const timeout = (s) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, s * 1000);
  });
};

//가데이터 테스트 할시
export const mockAPI = async (url) => {
  const URL = window.COMMON_CONFIG.API_URL.development;
  const fetchPro = fetch(URL + url);
  const fetchRes = await Promise.race([fetchPro, timeout(10)]);
  const response = await fetchRes.json();
  return response;
};
//실제데이터(데이터 개발서버) 할시
export const callAPI = async (url) => {
  const URL = window.COMMON_CONFIG.API_URL.production;
  const fetchPro = fetch(URL + url);
  const fetchRes = await Promise.race([fetchPro, timeout(10)]);
  const response = await fetchRes.json();
  return response;
};
