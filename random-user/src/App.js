import "./App.css";
import Image from "./components/image/Image";
import axios from "axios";
import { useEffect, useState } from "react";
import TextArea from "./components/textArea/TextArea";
import LogoButton from "./components/logoButton/LogoButton";
import businesswoman from "./icons/businesswoman.png";
import boss from "./icons/boss.png";
import call from "./icons/call.png";
import growing from "./icons/growing-up.png";
import mail from "./icons/mail.png";
import padlock from "./icons/padlock.png";
import street from "./icons/street-view.png";

function App() {
  const [newUser, setNewUser] = useState({
    image: "",
    name: "",
    email: "",
    age: "",
    street: "",
    phone: "",
    password: "",
  });
  useEffect(() => {
    const data = axios
      .get("https://randomuser.me/api")
      .then((res) =>
        setNewUser({
          image: res.data.results[0].picture.large,
          name: res.data.results[0].name,
          email: res.data.results[0].email,
          age: res.data.results[0].dob.age,
          street: res.data.results[0].location.street,
          phone: res.data.results[0].phone,
          password: res.data.results[0].login.password,
        })
      )
      .catch((err) => console.log(err));
  }, []);
  console.log(newUser);

  return (
    <div className="App">
      <div className="image">
        <Image image={newUser.image} />
      </div>
      <div className="text-area">
        <TextArea />
      </div>

      <div className="icons">
        <img src={businesswoman} alt="" />
        <img src={mail} alt="" />
        <img src={growing} alt="" />
        <img src={street} alt="" />
        <img src={call} alt="" />
        <img src={padlock} alt="" />
      </div>
    </div>
  );
}

export default App;
