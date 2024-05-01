import { useState, useEffect } from 'react';
import './Login.css';
import { FaLock } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({ user: "", password: "" });
  const [data, setData] = useState([]); 


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/auth');
        setData(response.data); 
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const foundUser = data.find(
      (user) => user.user === values.user && user.password === values.password
    );

    if (foundUser) {
      setTimeout(() => {
        navigate('/'); // Redirect to home page after 3 seconds
      }, 1000);
    } else {
      alert('Invalid username or password!');
    }
  };

  return (
    <div className="Login">
      <div className='Login-Card'>
        <form onSubmit={handleSubmit}>
          <h2>BIBLIOTHEQUE POLE BOUMERDES</h2>
          <div className="imput-box">
            <input
              type="text"
              placeholder="Username"
              required
              onChange={(e) => setValues({ ...values, user: e.target.value })}
            />
            <FaUser className="icon" />
          </div>
          <div className="imput-box">
            <input
              type="password"
              placeholder="Password"
              required
              onChange={(e) => setValues({ ...values, password: e.target.value })}
            />
            <FaLock className="icon" />
          </div>
          <div className="forgot">
            <a href="/"> Mot de passe oublier</a>
          </div>
          <button type="submit">Connecter</button>
          <div className="Revenir">
            <a href="/">Revenir a la page d'accueil</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
