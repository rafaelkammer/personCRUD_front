import Navbar from "../../components/navbar";
import { usePersons } from "../../Provider/PersonProvider";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import api from "../../services/api";
import { PersonsContainer } from "./style";
import { useState } from "react";
import { Dialog } from "@mui/material";
import EditPersonForm from "../../components/editPersonForm";

const ListPersonsPage = () => {
  const { persons, listPersons } = usePersons();
  const [personEdit, setPersonEdit] = useState({});

  const handleDeletePerson = (id: any) => {
    api.delete(`persons/${id}`).then((response) => listPersons());
  };

  const [openModal, setOpenModal] = useState(false);
  const handleClickOpenModal = (person: any) => {
    setPersonEdit(person);
    setOpenModal(true);
  };
  const handleClickCloseModal = () => setOpenModal(false);

  return (
    <>
      <Navbar />
      <PersonsContainer>
        <ul>
          {persons.map((person) => (
            <li key={person.id}>
              <div>
                <h3>{`Name: ${person.name}`}</h3>
                <h3>{`Nickname: ${person.nickname}`}</h3>
                <h3>{`Gender: ${person.gender}`}</h3>
                <h3>{`CPF: ${person.cpf}`}</h3>
                <h3>{`Phone: ${person.phone}`}</h3>
                <h3>{`${person.address}`}</h3>
              </div>
              <div>
                <img src={person.profile_picture} alt={person.name} />
              </div>
              <div>
                <button onClick={() => handleClickOpenModal(person)}>
                  <EditIcon />
                </button>
                <button
                  onClick={() => {
                    handleDeletePerson(person.id);
                  }}
                >
                  <DeleteForeverIcon />
                </button>
              </div>
              <Dialog open={openModal} onClose={handleClickCloseModal}>
                <EditPersonForm
                  person={personEdit}
                  handleClickcloseModal={handleClickCloseModal}
                />
              </Dialog>
            </li>
          ))}
        </ul>
      </PersonsContainer>
    </>
  );
};

export default ListPersonsPage;
