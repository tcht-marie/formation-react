export const myFetch = async <T>(
  url: string,
  options?: RequestInit,
): Promise<T> => {
  const response = await fetch(`http://localhost:3000${url}`, options);
  return (await response.json()) as T;
};
