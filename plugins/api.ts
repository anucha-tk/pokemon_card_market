export default defineNuxtPlugin((nuxtApp) => {
  const apiKey: string = 'your-api-key-here';

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  nuxtApp.provide('fetch', async (url: string, options: RequestInit = {}): Promise<any> => {
    const headers: HeadersInit = {
      ...options.headers,
      'X-Api-Key': apiKey,
      'Content-Type': 'application/json',
    };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    return $fetch(url, { ...options, headers });
  });
});
