export const logIn = (callback: Function) => {
  //@ts-ignore
  window.VK.Auth.login(() => {
    callback();
  });
};

export const logOut = (callback: Function) => {
  //@ts-ignore
  window.VK.Auth.logout(() => {
    callback();
  });
};

export const loadUserData = (callback: Function) => {
  //@ts-ignore
  window.VK.Api.call("users.get", { fields: "photo_200" }, (r: any) => {
    if (r.error) {
      return r.error;
    } else {
      var user = r.response;
      callback(user[0]);
    }
  });
};
