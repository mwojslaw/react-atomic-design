export type RepositoryType = "private" | "public";

export type RepositoryLanguage = "javascript" | "typescript";

export type Repository = {
  type: RepositoryType;
  language: RepositoryLanguage;
};
