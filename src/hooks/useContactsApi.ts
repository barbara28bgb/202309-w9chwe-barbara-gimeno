import { useCallback } from "react";
import { ContactStructure } from "../store/types";

const useContactsApi = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const getContacts = useCallback(async (): Promise<ContactStructure[]> => {
    const response = await fetch(`${apiUrl}/contacts`);
    const contacts = (await response.json()) as ContactStructure[];

    return contacts;
  }, [apiUrl]);

  return {
    getContacts,
  };
};

export default useContactsApi;
