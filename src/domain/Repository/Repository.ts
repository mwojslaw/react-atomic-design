export type RepositoryType = "private" | "public";

export type RepositoryLanguage = "javascript" | "typescript";

export type Repository = {
  name: string;
  description: string;
  type: RepositoryType;
  language: RepositoryLanguage;
};
