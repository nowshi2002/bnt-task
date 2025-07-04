import React, { useState } from 'react';

function Password() {
  const [password, setPassword] = useState("");

  const length = password.length >= 8;
  const uppercase = (password.match(/[A-Z]/g) || []).length >= 1;
  const lowercase = (password.match(/[a-z]/g) || []).length >= 1;
  const number = (password.match(/[0-9]/g) || []).length >= 1;
  const special = (password.match(/[^A-Za-z0-9]/g) || []).length >= 1;

  const strong = length && uppercase && lowercase && number && special;

  return (
    <>
      <div>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Enter Your Password"
        />
      </div>
      <div>
        {password && (
          <b>
            {strong ? "Strong Password" : "Weak Password"}
          </b>
        )}
      </div>
    </>
  );
}

export default Password;
