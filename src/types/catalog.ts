export type ItemProp = {
  label: string;
  value: string;
};

export type CatalogItem = {
  itemname: string;
  category: string;
  image: string;
  itemprops: ItemProp[];
};
