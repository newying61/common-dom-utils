import { isDocumentReady } from "./isDocumentReady";

export function documentReady(): Promise<Document> {
  return new Promise((resolve) => {
    if (isDocumentReady()) {
      resolve(document);
    } else {
      document.addEventListener('DOMContentLoaded', function() {
        resolve(document);
      });
    }
  });
}
