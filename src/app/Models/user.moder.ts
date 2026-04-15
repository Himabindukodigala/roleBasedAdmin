export enum UserRole {
  Admin = 1,
  User = 2,
  Guest = 3
}

export interface User {
  id: string;
  username: string;
  email: string;
  passwordHash?: string;
  role: UserRole;
  phoneNumber?: string;
  address?: string;
  createdAt: string;
  isActive: boolean;
}
