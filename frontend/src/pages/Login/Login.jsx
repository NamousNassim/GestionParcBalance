import React, { useState } from 'react';
import { Alert, AlertIcon,  AlertDescription, Box } from '@chakra-ui/react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (!username.trim() || !password.trim()) {
        setShowAlert(true);
      return;
    }
    setShowAlert(false);
  };

  return (
    <div className="login flex items-center justify-center h-screen bg-gray-100">
      <div className="max-w-xs w-full">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
            {

showAlert && (
    <Box my={4}>
      <Alert status="error">
        <AlertIcon />
        
        <AlertDescription>Entrer une nom d'utilisateur et mot de passe  </AlertDescription>
      </Alert>
    </Box>
  )
            }
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Nom D'utilisateur
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Nom d'utilisateur"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Mot de Passe
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Se Connecter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;