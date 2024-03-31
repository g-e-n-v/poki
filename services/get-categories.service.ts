import categories from "@/data/categories.json";

export const getCategories = async () => {
  // TODO: fetch categories here
  return await Promise.resolve(categories);
};
