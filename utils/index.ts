export function sleep(secs = 3): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, secs * 1000));
}