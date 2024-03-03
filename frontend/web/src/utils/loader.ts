import { DirectoryLoader } from "langchain/document_loaders/fs/directory";

import { PDFLoader } from "langchain/document_loaders/fs/pdf";

const directoryLoader = new DirectoryLoader(
  "public/document-loaders",
  {
    ".pdf": (path: string) => new PDFLoader(path),
  }
);
export default directoryLoader;
