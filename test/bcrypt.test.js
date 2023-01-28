import { genSalt } from "bcrypt";
import bcrypt from "bcryptjs";

const user = {
  username: "myUsername",
  password: "myPassword",
};

const saltRounds = 10;

// Hash the password
bcrypt.hash(user.password, saltRounds, (err, hashedPassword) => {
  if (err) {
    console.log(err);
  } else {
    user.password = hashedPassword;
    console.log(`Hashed password: ${user.password}`);
  }
});
console.log(user.password);

// Compare the hashed password
const enteredPassword = "myPassword";

bcrypt.compare(enteredPassword, user.password, (err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log(result, "*********");
  }
});
