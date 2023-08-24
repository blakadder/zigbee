declare type DatabaseEntry = {
  title: string;
  model: string;
  vendor: string;
  zigbeemodel: string | string[] | number;
  href: string;
  url: string;
  category: string;
  compatible: string[];
};

declare type GlobalDatabase = Record<string, DatabaseEntry>;

declare var database: GlobalDatabase;
