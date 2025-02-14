export function generateNextId<T>(items: T[], key: (item: T) => string): string {
  const maxId = Math.max(...items.map((item) => parseInt(String(key(item)))))
  return (maxId + 1).toString()
}
