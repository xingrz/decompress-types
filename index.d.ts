import { Readable } from 'stream';

export interface File {
  data: Buffer;
  mode: number;
  mtime: Date | string;
  path: string;
  type: string;
  linkname?: string;
}

export type DecompressPlugin<Options> = (input: Buffer | Readable, opts?: Options) => Promise<File[]>;
