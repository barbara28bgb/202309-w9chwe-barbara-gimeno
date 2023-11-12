export interface ContactStructure {
  id: number;
  name: string;
  yearOfBirth: string;
  isFriend: boolean;
  image: string;
}

export interface ContactsStateStructure {
  contacts: ContactStructure[];
}
