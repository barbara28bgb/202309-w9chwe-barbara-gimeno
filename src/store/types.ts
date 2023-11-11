export interface ContactStructure {
  id: number;
  name: string;
  yearOfBirth: string;
  isFriend: boolean;
  image: string;
}

export interface ContactsStructure {
  contacts: ContactStructure[];
}
