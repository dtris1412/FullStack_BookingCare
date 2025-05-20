import bcrypt from "bcryptjs";
import db from "../models/index";
const salt = bcrypt.genSaltSync(10);
let createNewUser = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hasUserPasswordFromBcrypt = await hasUserPassword(data.password);
      await db.User.create({
        email: data.email,
        password: hasUserPasswordFromBcrypt,
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.address,
        phoneNumer: data.phoneNumber,
        gender: data.gender === "1" ? true : false,
        roleId: data.roleId,
      });
      resolve("ok create a new user succeed!");
    } catch (e) {
      console.log(e);
      reject(e);
    }
  });
};

let hasUserPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      const hashPassword = await bcrypt.hashSync("password", salt);
      resolve(hashPassword);
    } catch (e) {
      reject(e);
    }
  });
};
module.exports = {
  createNewUser: createNewUser,
};
