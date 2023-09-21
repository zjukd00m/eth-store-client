export default function useStorageHook() {
  function store(itemKey: string, data: { [key: string]: any }, overwrite = false) {
    const itemData = get(itemKey);

    if (itemData !== null && !overwrite) return false;

    const serializedData = JSON.stringify(data);

    window.localStorage.setItem(itemKey, serializedData);

    return true;
  }

  function get(itemKey: string): { [key: string]: any } | null {
    const itemData = window.localStorage.getItem(itemKey);

    if (!itemData) return null;

    return JSON.parse(itemData);
  }

  function clear() {
    window.localStorage.clear();
  }

  return {
    store,
    get,
    clear,
  }
}