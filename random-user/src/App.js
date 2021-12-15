import "./App.css";
import Image from "./components/image/Image";
import axios from "axios";
import { useEffect, useState } from "react";
import TextArea from "./components/textArea/TextArea";
import businesswoman from "./icons/businesswoman.png";
import boss from "./icons/boss.png";
import call from "./icons/call.png";
import growing from "./icons/growing-up.png";
import mail from "./icons/mail.png";
import padlock from "./icons/padlock.png";
import street from "./icons/street-view.png";
import NewUserBtn from "./components/newUserBtn/NewUserBtn";
import AddUserBtn from "./components/addUserBtn/AddUserBtn";
import AddUser from "./components/addUser/AddUser";

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
  const [userList, setUserList] = useState([]);

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

  // const [addedUser, setAddedUser] = useState([]);
  // const addUser = () => {
  //   let { name, email, phone, age } = newUser;
  //   // console.log(name, email, phone, age);
  //   setAddedUser(addedUser.push(...addedUser, { name, email, phone, age }));
  //   console.log(addedUser);
  // };
  const addUser = () => {
    // console.log("func içi");
    if (userList.filter((el) => el.email === newUser.email).length === 0) {
      setUserList((oldArray) => [
        ...oldArray,
        {
          firstName: `${newUser.name.first}`,
          email: `${newUser.email}`,
          phone: `${newUser.phone}`,
          age: `${newUser.age}`,
        },
      ]);
    }
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
          gender: res.data.results[0].gender,
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
        <img
          src={newUser.gender == "male" ? boss : businesswoman}
          alt=""
          onClick={getName}
        />
        <img src={mail} alt="" onClick={getMail} />
        <img src={growing} alt="" onClick={getAge} />
        <img src={street} alt="" onClick={getStreet} />
        <img src={call} alt="" onClick={getPhone} />
        <img src={padlock} alt="" onClick={getPassword} />
      </div>
      <div className="buttons">
        <NewUserBtn getNewUser={getNewUser} />

        <AddUserBtn addUser={addUser} />
        <AddUser userList={userList} />
      </div>
    </div>
  );
}

export default App;
