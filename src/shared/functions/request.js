const base_url = "http://localhost:9999";

function request(api, options) {
  fetch(base_url + api, options).then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      return null;
    }
  });
}

export function login(email, password) {
  const api = "/cleantracks/api/login";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email, password: password }),
  };
  request(api, options).then((result) => {
    if (result.code) {
      console.log(api + " failed: " + result.message);
    }
    return result;
  });
}

export function register(email, password) {
  const api = "/cleantracks/api/register";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email, password: password }),
  };
  request(api, options).then((result) => {
    if (result.code) {
      console.log(api + " failed: " + result.message);
    }
    return result;
  });
}

export async function checkLogin(token) {
  const api = "/cleantracks/api/checkLogin";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: token,
    },
  };
  request(api, options).then((result) => {
    if (result.code) {
      console.log(api + " failed: " + result.message);
    }
    return result;
  });
}
