import { randomUUID } from "node:crypto";

export class Student {
  name: string;
  email: string;
  birthDate: Date;
  id?: string;

  constructor(name: string, email: string, birthDate: Date, id?: string) {
    this.name = name;
    this.email = email;
    this.birthDate = birthDate;
    this.id = id ?? randomUUID();
  }
}