import { Readable } from 'stream';

export interface File {
  path: string;
  type: 'file' | 'link' | 'symlink' | 'directory';
  mode: number;
  mtime: Date | string;
  data?: Buffer;
  linkname?: string;
}

export type DecompressFileWriter = (file: File, input: Readable) => Promise<void>;

export interface DecompressPluginOptions {
  fileWriter?: DecompressFileWriter;
}

export type DecompressPlugin<Options extends DecompressPluginOptions | void> = (input: Buffer | Readable, opts?: Options) => Promise<File[]>;
