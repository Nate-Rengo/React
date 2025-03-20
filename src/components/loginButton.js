import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function LoginButton() {
  const navigate = useNavigate();
  const [nameValue, setNameValue] = useState('');

  function handleInputChange(event) {
    setNameValue(event.target.value);
  }

  function Login() {
    if (nameValue.toLowerCase().includes("finna".toLowerCase())) {
      alert("Hello my sweet lovely Finna!!!!");
      navigate("/finnaHome");
    } else {
      alert("Hey " + nameValue + "! Welcome to my website, here is a bit about me!");
      navigate("/AboutMe");
    }
    setNameValue('');
  }

  return (
    <div id="loginField">
      <input 
        type="text" 
        id="nameInput" 
        placeholder="Enter your name"
        value={nameValue}
        onChange={handleInputChange}
      />
      <button id="loginButton" onClick={Login}>
        Click to continue
      </button>
    </div>
  );
}