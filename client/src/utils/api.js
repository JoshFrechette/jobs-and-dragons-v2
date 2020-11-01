export const api = {
  async addUserInfo(userInfo) {
    console.log(userInfo, "at api.js");
    const res = await fetch('/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    });

    if (res.ok) {
      const jsonRes = await res.json();
      return jsonRes;
    }
  },

  async getUserInfo(userEmail) {
    const res = await fetch(`/api/v1/users/email/${userEmail}`);
    const jsonRes = await res.json();
    return jsonRes;
  },

  async getAllUsers() {
    const res = await fetch(`/api/v1/users`);
    const jsonRes = await res.json();
    console.log(jsonRes);
    return jsonRes;
  },
};
