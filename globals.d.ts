declare type DatabaseEntry = {
  title: string;
  model: string;
  vendor: string;
  zigbeemodel: string;
  href: string;
  url: string;
  category: string;
};

declare type GlobalDatabase = Record<string, DatabaseEntry>;

declare var database: GlobalDatabase;
