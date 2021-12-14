import "./App.css";
import Image from "./components/image/Image";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import TextArea from "./components/textArea/TextArea";
import LogoButton from "./components/logoButton/LogoButton";
import businesswoman from "./icons/businesswoman.png";
import boss from "./icons/boss.png";
import call from "./icons/call.png";
import growing from "./icons/growing-up.png";
import mail from "./icons/mail.png";
import padlock from "./icons/padlock.png";
import street from "./icons/street-view.png";
import NewUserBtn from "./components/newUserBtn/NewUserBtn";
import AddUserBtn from "./components/addUserBtn/AddUserBtn";

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
  const [dataType, setDataType] = useState("My name is");
  const [dataType2, setDataType2] = useState("");

  const getName = () => {
    setDataType("My name is");
    setDataType2(
      newUser.name.title + " " + newUser.name.first + " " + newUser.name.last
    );
    // console.log(dataType2);
  };
  const getMail = () => {
    setDataType("My email is");
    setDataType2(newUser.email);
  };
  const getAge = () => {
    setDataType("My age is");
    setDataType2(newUser.age);
  };
  const getStreet = () => {
    setDataType("My street is");
    setDataType2(newUser.street);
  };
  const getPhone = () => {
    setDataType("My phone number is");
    setDataType2(newUser.phone);
  };
  const getPassword = () => {
    setDataType("My password is");
    setDataType2(newUser.password);
  };
  const [count, setCount] = useState(0);
  const getNewUser = () => {
    setCount(count + 1);
    getName();
  };

  useEffect(() => {
    const data = axios
      .get("https://randomuser.me/api")
      .then((res) => {
        setNewUser({
          image: res.data.results[0].picture.large,
          name: res.data.results[0].name,
          email: res.data.results[0].email,
          age: res.data.results[0].dob.age,
          street: res.data.results[0].location.street.name,
          phone: res.data.results[0].phone,
          password: res.data.results[0].login.password,
        });
        setDataType2(
          res.data.results[0].name.title +
            " " +
            res.data.results[0].name.first +
            " " +
            res.data.results[0].name.last
        );
      })
      .catch((err) => console.log(err));
  }, [count]);

  return (
    <div className="App">
      <div className="image">
        <Image image={newUser.image} />
      </div>
      <div className="text-area">
        <TextArea name={dataType} data={dataType2} />
      </div>

      <div className="icons">
        <img src={businesswoman} alt="" onClick={getName} />
        <img src={mail} alt="" onClick={getMail} />
        <img src={growing} alt="" onClick={getAge} />
        <img src={street} alt="" onClick={getStreet} />
        <img src={call} alt="" onClick={getPhone} />
        <img src={padlock} alt="" onClick={getPassword} />
      </div>
      <div className="buttons">
        <NewUserBtn getNewUser={getNewUser} />
        <br />
        <AddUserBtn saveNewUser={saveNewUser} />
      </div>
      <div className="list">
        <table>
          <tr>
            <th>First Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Age</th>
          </tr>
          <tr></tr>
        </table>
      </div>
    </div>
  );
}

export default App;
