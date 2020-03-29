import React,  { useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import api from "../../services/api";
import "./styles.css";

import logoImg from "../../assets/logo.svg";

export default function RedeemId() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  function enviarEmail(){
    alert("Id da ong: " + name + "  enviado ao e-mail: "+ email );
  }

 
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be the Hero" />
          <h1>Resgatar id</h1>
          <p>
            Digite o nome da sua ong e o e-mail para resgatar a sua id.
          </p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para home
          </Link>
        </section>
        <form >
          <input
            placeholder="Nome da ONG"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            
          />
          
     
          <button className="button" type="submit" onClick ={enviarEmail}>
            Resgatar

          </button>
        </form>
      </div>
    </div>
  );
}
