export function sleep(secs: number = 3): Promise<void> {
  return new Promise<void>((resolve) => setTimeout(resolve, secs * 1000))
}