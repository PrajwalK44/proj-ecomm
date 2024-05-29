import React,{useState, useEffect} from "react";
import {useNavigate, useLocation} from 'react-router-dom';
import { useAuth } from "../context/Auth";

const Spinner = ({ path = 'login' }) => {
  const [auth] = useAuth();
  const [count, setCount] = useState(3);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevValue => prevValue - 1);
    }, 1000);
    if (count === 0) {
      navigate(`/${path}`, { state: location.pathname });
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [count, navigate, location, path]);

  return (
    <div className="spinner-container">
      <div className="spinner-content">
        <h1 className='spinner-text'>{auth?.user && !auth?.user?.role ? `Redirecting in ${count} seconds` : `Redirecting in ${count} seconds`}</h1>
        <div className="spinner-border text-danger" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};

  
  export default Spinner;