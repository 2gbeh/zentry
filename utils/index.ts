export const sleep = (secs = 3): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, secs * 1000));
