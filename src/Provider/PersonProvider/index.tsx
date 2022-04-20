import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";

import api from "../../services/api";

interface personsProviderProps {
  children: ReactNode;
}
interface Person {
  id: string;
  created_at: string;
  updated_at: string;
  name: string;
  cpf: string;
  nickname: string;
  gender: string;
  phone: string;
  address: string;
  comments: string;
  profile_picture: string;
}

interface personsProviderData {
  persons: Person[];
  listPersons: () => void;
}

const personsContext = createContext<personsProviderData>(
  {} as personsProviderData
);

export const PersonsProvider = ({ children }: personsProviderProps) => {
  const [persons, setPersons] = useState([]);

  //FAZER UM SELECTTOEDIT AQUI E DISPARAR ELE DENTRO DO CARD

  const listPersons = () => {
    api
      .get(`persons`)
      .then((response) => {
        setPersons(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    listPersons();
  }, []);

  return (
    <personsContext.Provider value={{ persons, listPersons }}>
      {children}
    </personsContext.Provider>
  );
};
export const usePersons = () => useContext(personsContext);
