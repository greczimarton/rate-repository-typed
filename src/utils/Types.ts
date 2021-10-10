import { FormikState } from "formik/dist/types";

export interface Repository {
    id: string;
    fullName: string;
    description: string;
    language: string;
    forksCount: number;
    stargazersCount: number;
    ratingAverage: number;
    reviewCount: number;
    ownerAvatarUrl: string;
}

export interface AuthorizeInput {
    username: string;
    password: string;
}

export type resetForm = (
    nextState?:
        | Partial<
              FormikState<{
                  username: string;
                  password: string;
              }>
          >
        | undefined
) => void;
