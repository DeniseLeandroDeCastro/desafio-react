import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";
import { Image } from "./styles";
import ImageProfile from "./../../components/assets/foto_perfil.png";

const Home = () => {

  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <C.ContainerButton>
      <C.Button onClick={() => [signout(), navigate("/")]} >Logout</C.Button>
        <C.Container>
          <C.Content>
            <C.TextImage>Profile picture</C.TextImage>
              <Image src={ImageProfile} />

            <C.TextProfile>
              Your <strong>Name</strong>
              </C.TextProfile>

            <C.NameProfile>Christine James</C.NameProfile>
            <C.TextProfile>Your <strong>E-mail</strong></C.TextProfile>
            <C.EmailProfile>christinejames@gmail.com</C.EmailProfile>
        </C.Content>   
        </C.Container>
    </C.ContainerButton>   
  );
}

export default Home;
