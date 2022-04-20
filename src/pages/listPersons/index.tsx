import Navbar from "../../components/navbar";
import { usePersons } from "../../Provider/PersonProvider";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import api from "../../services/api";
import { PersonsContainer } from "./style";
import { useHistory } from "react-router-dom";

const ListPersonsPage = () => {
  const history = useHistory();
  const { persons, listPersons } = usePersons();

  const handleDeletePerson = (id: any) => {
    api.delete(`persons/${id}`).then((response) => listPersons());
  };

  const handleEditPerson = (person: any) => {
    // setEdit()
    history.push("/edit");
  };

  return (
    <>
      <Navbar />
      <PersonsContainer>
        <ul>
          {persons.map((person) => (
            <li>
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
                <button
                  onClick={() => {
                    handleEditPerson(person);
                  }}
                >
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
            </li>
          ))}
        </ul>
      </PersonsContainer>
    </>
  );
};

export default ListPersonsPage;
