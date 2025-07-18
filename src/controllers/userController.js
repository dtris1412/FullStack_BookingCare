import userService from "../services/UserService";
let handleLogin = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  if (!email || !password) {
    return res.status(500).json({
      errCode: 1,
      message: "Missing input parameters",
    });
  }
  let userData = await userService.handleUserLogin(email, password);

  //check email exist
  //compare password
  //return user information
  //access_token: JWT (JSON WEB TOKEN )
  return res.status(200).json({
    errCode: userData.errCode,
    message: userData.errMessage,
    user: userData.user ? userData.user : {},
  });
};

module.exports = {
  handleLogin: handleLogin,
};
