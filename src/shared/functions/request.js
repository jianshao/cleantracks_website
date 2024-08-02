const base_url = "https://api.takecares.cn";

function request(api, options) {
  return fetch(base_url + api, options).then((response) => {
    console.log("resp: ", response);
    if (response.ok) {
      return response.json();
    } else {
      console.log("request failed: ", api)
      return {};
    }
  });
}

export async function login(email, password) {
  const api = "/cleantracks/api/login";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email, password: password }),
  };
  const result = await request(api, options);
  if ("code" in result && result.code) {
    console.log(api + " failed: " + result.message);
  }
  return result;
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
  return request(api, options).then((result) => {
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
  return request(api, options).then((result) => {
    if (result.code) {
      console.log(api + " failed: " + result.message);
    }
    return result;
  });
}
