import categories from "@/data/categories.json";

export const getCategoryDetail = (slug: string | number): Category | undefined => {
  return categories.find((c) => c.id.toString() === slug);
};
