export type WorkFrontmatter = {
  title: string;
  role: string;
  organisation: string;
  period: string;
  summary: string;
  tags: string[];
  featured?: boolean;
  order?: number;
  coverGradient?: string;
};

export type ProjectFrontmatter = {
  title: string;
  tagline: string;
  summary: string;
  status: "Active" | "Ongoing" | "Archived" | "Shipped";
  tags: string[];
  url?: string;
  featured?: boolean;
  order?: number;
  coverGradient?: string;
};

export type WritingFrontmatter = {
  title: string;
  summary: string;
  date: string;
  topic:
    | "Product"
    | "Technology"
    | "Business"
    | "Photography"
    | "Food"
    | "Life"
    | "Entrepreneurship";
  featured?: boolean;
};

export type PhotoCollectionFrontmatter = {
  title: string;
  summary: string;
  order?: number;
  coverGradient?: string;
  photos: {
    caption: string;
    gradient: string;
    orientation?: "landscape" | "portrait" | "square";
  }[];
};

export type NowFrontmatter = {
  updated: string;
  workingOn: string[];
  building: string[];
  learning: string[];
  reading: string[];
  listening: string[];
  planning: string[];
};

export type ContentEntry<T> = {
  slug: string;
  frontmatter: T;
  content: string;
};
