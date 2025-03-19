import { User } from "@/core/interfaces/user.interface";

export interface AuthToken {
  user: User;
  token: string;
  expiresIn: number;
}
