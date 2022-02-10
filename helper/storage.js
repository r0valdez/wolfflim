export const StorageService = {
  setJsonData: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  getJsonData: (key) => {
    let data =  localStorage.getItem(key);
    data = data ? data : '';
    
    return JSON.parse(data);
  },
  exist: (key) => {
    return !!localStorage.getItem(key);
  }
}