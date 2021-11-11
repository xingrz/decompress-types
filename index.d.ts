import { Readable } from 'stream';

export interface File {
  data: Buffer;
  mode: number;
  mtime: Date | string;
  path: string;
  type: string;
  linkname?: string;
}

export type DecompressPlugin = (input: Buffer | Readable, opts?: Object) => Promise<File[]>;
