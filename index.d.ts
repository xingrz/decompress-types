import { Readable } from 'stream';

export interface File {
  path: string;
  type: 'file' | 'link' | 'symlink' | 'directory';
  mode: number;
  mtime: Date | string;
  data?: Buffer;
  linkname?: string;
}

export type DecompressPlugin<Options> = (input: Buffer | Readable, opts?: Options) => Promise<File[]>;
