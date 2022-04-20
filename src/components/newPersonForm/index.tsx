import { Button, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";
import { usePersons } from "../../Provider/PersonProvider";
import api from "../../services/api";
import { useHistory } from "react-router";
import { PersonsFormContainer } from "./style";

const NewPersonForm = () => {
  const history = useHistory();

  const { listPersons } = usePersons();
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [nickname, setNickname] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [comments, setComments] = useState("");
  const [picture, setPicture] = useState("");

  const handleName = (event: any) => {
    setName(event.target.value);
  };
  const handleCpf = (event: any) => {
    setCpf(event.target.value);
  };
  const handleNickname = (event: any) => {
    setNickname(event.target.value);
  };
  const handleGender = (event: any) => {
    setGender(event.target.value);
  };
  const handlePhone = (event: any) => {
    setPhone(event.target.value);
  };
  const handleAddress = (event: any) => {
    setAddress(event.target.value);
  };
  const handleComments = (event: any) => {
    setComments(event.target.value);
  };
  const handlePicture = (event: any) => {
    setPicture(event.target.value);
  };

  const joinedData = {
    name: name,
    cpf: cpf,
    nickname: nickname,
    gender: gender,
    phone: phone,
    address: address,
    comments: comments,
    profile_picture: picture,
  };

  const handleAddPerson = (PersonData: any) => {
    api.post(`persons`, PersonData).then((response) => {
      listPersons();
      setName("");
      setCpf("");
      setNickname("");
      setGender("");
      setPhone("");
      setAddress("");
      setComments("");
      setPicture("");
    });
    history.push("/list");
  };

  return (
    <PersonsFormContainer>
      <TextField
        id="name"
        label="Complete name"
        variant="outlined"
        size="small"
        margin="none"
        value={name}
        onChange={handleName}
      />
      <TextField
        id="cpf"
        label="CPF"
        variant="outlined"
        size="small"
        margin="none"
        value={cpf}
        onChange={handleCpf}
      />
      <TextField
        id="nickname"
        label="Nickname"
        variant="outlined"
        size="small"
        margin="none"
        value={nickname}
        onChange={handleNickname}
      />
      <TextField
        id="phone"
        label="Telephone"
        variant="outlined"
        size="small"
        margin="none"
        value={phone}
        onChange={handlePhone}
      />
      <TextField
        id="address"
        label="Address"
        variant="outlined"
        size="small"
        margin="none"
        value={address}
        onChange={handleAddress}
      />
      <TextField
        id="comments"
        label="Aditional comments"
        variant="outlined"
        size="small"
        margin="none"
        multiline
        maxRows={4}
        value={comments}
        onChange={handleComments}
      />
      <TextField
        id="picture"
        label="Profile picture's URL"
        variant="outlined"
        size="small"
        margin="none"
        value={picture}
        onChange={handlePicture}
      />
      <InputLabel id="gender">Gender:</InputLabel>
      <Select
        labelId="gender"
        id="gender"
        value={gender}
        label="gender"
        onChange={handleGender}
      >
        <MenuItem value={"Cisgender Woman"}>Cisgender Woman</MenuItem>
        <MenuItem value={"Transgender Woman"}>Transgender Woman</MenuItem>
        <MenuItem value={"Cisgender Man"}>Cisgender Man</MenuItem>
        <MenuItem value={"Transgender Man"}>Transgender Man</MenuItem>
        <MenuItem value={"Prefer not to answer"}>Prefer not to answer</MenuItem>
      </Select>
      <Button
        onClick={() => {
          handleAddPerson(joinedData);
        }}
        size="large"
        variant="contained"
      >
        Add new Person
      </Button>
    </PersonsFormContainer>
  );
};

export default NewPersonForm;
