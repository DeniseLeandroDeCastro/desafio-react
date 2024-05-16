import React, { useState } from "react";
import Input from "../../components/input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { Image } from "./styles";
import Logo_b2bit from "./../../components/assets/logo_b2bit.png";


const Signup = () => {
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignup = () => {
    if (!email | !emailConf | !senha) {
      setError("Preencha todos os campos");
      return;
    } else if (email !== emailConf) {
      setError("Os e-mails não são iguais");
      return;
    }

    const res = signup(email, senha);

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadatrado com sucesso!");
    navigate("/");
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
          <C.TextInput>Confirme seu E-mail</C.TextInput>
          <Input
            type="email"
            placeholder="@gmail.com"
            value={emailConf}
            onChange={(e) => [setEmailConf(e.target.value), setError("")]}
          />
          <C.TextInput>Password</C.TextInput>
          <Input
            type="password"
            placeholder="****************"
            value={senha}
            onChange={(e) => [setSenha(e.target.value), setError("")]}
          />
          <C.labelError>{error}</C.labelError>
          <Button Text="Sign Up" onClick={handleSignup} />
            <C.LabelSignin>
              Já tem uma conta?
              <C.Strong>
              <Link to="/">&nbsp;Sign In</Link>
              </C.Strong>
            </C.LabelSignin>
      </C.Content>
    </C.Container>
  );
};

export default Signup;