interface Disarray extends Array<[] | Disarray> {}

interface BlobArray extends Array<number | BlobArray> {}
export type Blob = number | BlobArray;


export function hydrate(blob: Blob): Disarray {
  if (blob instanceof Array) return blob.map(hydrate);
  return Array(blob).fill([]);
}

export function dehydrate(dis: Disarray, depth: number = 0): Blob {
  if (depth === 0) return dis.length;
  return dis.map((dis: Disarray) => dehydrate(dis, depth - 1));
}

export function depth(dis: Disarray): number {
  return dis.reduce((d: number, dis: Disarray) => {
    return Math.max(d, depth(dis) + 1);
  }, 1);
}

export function valid(dis: Disarray): boolean {
  return dis instanceof Array && dis.every(valid);
}
