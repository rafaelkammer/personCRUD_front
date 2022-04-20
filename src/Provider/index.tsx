import { ReactNode } from "react";
import { PersonsProvider } from "./PersonProvider";

interface ProviderProps {
  children: ReactNode;
}

const Providers = ({ children }: ProviderProps) => {
  return (
    <>
      <PersonsProvider>{children}</PersonsProvider>
    </>
  );
};
export default Providers;
