import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

interface AuthData {
  jwt: string;
  user: {
    id: string;
    provider: string;
  };
}

function GoogleAuthCallback(): JSX.Element {
  const [auth, setAuth] = useState<AuthData | undefined>();
  const location = useLocation();

  useEffect(() => {
    if (!location) {
      return;
    }

    const { search } = location;
    axios({
      method: 'GET',
      url: `http://localhost:1337/api/auth/google/callback?${search}`,
    })
      .then((res) => res.data)
      .then((data: AuthData) => setAuth(data));
  }, [location]);

  return (
    <div>
      {auth && (
        <>
          <div>Jwt: {auth.jwt}</div>
          <div>User Id: {auth.user.id}</div>
          <div>Provider: {auth.user.provider}</div>
        </>
      )}
    </div>
  );
}

export default GoogleAuthCallback;
