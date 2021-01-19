import axios from "axios";

const login = (username, password) =>
  new Promise((resolve, reject) =>
    axios
      .post(
        `http://localhost:3001/api/v1/auth/login`,
        { username, password },
        {
          "Access-Control-Allow-Origin": "localhost:3000",
          "Access-Control-Allow-Credentials": true,
          headerwithCredentials: true,
        }
      )
      .then((data) => resolve(data.data))
      .catch(({ response }) => reject(response))
  );

export default login;
