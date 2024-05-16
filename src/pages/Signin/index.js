import React, { useState } from "react";
import Input from "../../components/input";
import { Image } from "./styles";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Logo_b2bit from "./../../components/assets/logo_b2bit.png";


const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email | !senha) {
      setError("Preencha todos os campos");
      return;
    }

    const res = signin(email, senha);

    if (res) {
      setError(res);
      return;
    }

    navigate("/home");
  };

  return (
    <C.Container>
      <C.Content>
        <Image src={Logo_b2bit} />
        <C.TextInput>E-mail</C.TextInput>
        <Input
          type="email"
          placeholder="@gmail.com"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <C.TextInput>Password</C.TextInput>
        <Input
          type="password"
          placeholder="****************"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <Button Text="Sign In" onClick={handleLogin} />
        <C.LabelSignup>
          Não tem uma conta?
          <C.Strong>
            <Link to="/signup">&nbsp;Sign Out</Link>
          </C.Strong>
        </C.LabelSignup>
      </C.Content>
    </C.Container>
  );
};

export default Signin;
