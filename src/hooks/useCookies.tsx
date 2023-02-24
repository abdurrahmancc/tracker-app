import Cookies from "js-cookie";

export const accessTokenName = "Support_app_client_AccessToken";

// set cookie
export const setCookie = (cookieName: string, value: string) => {
  Cookies.set(cookieName, value, {
    expires: 30,
    secure: true,
    sameSite: "strict",
    path: "/",
  });
};

// get cookie
export const getCookie = (cookieName: string) => {
  return Cookies.get(cookieName);
};

//remove cookie
export const removeCookie = async (cookieName: string) => {
  Cookies.remove(cookieName);
};
