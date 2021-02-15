const regex = {
  name: new RegExp("^[A-Z](?!\\s)[a-z]*((\\W)?[A-Z][a-z]+)*$"),
  email: new RegExp(
    "^(([^<>()\\[\\]\\\\.,;:\\s@]+(\\.[^<>()\\[\\]\\\\.,;:\\s@]+)*)|(.+))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$"
  ),
  password: new RegExp("^[A-Za-z\\d]{8,}$"),
};

const passvalue = {
  pass: "",
};

export class Validators {
  static name(value, message) {
    if (value) {
      const result = regex.name.test(value);
      if (!result) return { error: true, message };
    } else return { error: true, message };
  }

  static email(value, message) {
    if (value) {
      const result = regex.email.test(value);
      if (!result) return { error: true, message };
    } else return { error: true, message };
  }

  static password(value, message) {
    passvalue.pass = value;
    if (value) {
      const result = regex.password.test(value);
      if (!result) return { error: true, message };
    } else return { error: true, message };
  }

  static passwordmatch(value, message) {
    if (value) {
      if (value !== passvalue.pass) return { error: true, message };
    } else return { error: true, message };
  }
}

export const validateInput = (validators, value) => {
  if (validators && validators.length) {
    for (let i = 0; i < validators.length; i++) {
      const error = validators[i].check(value, validators[i].message);
      if (error) return error;
    }
  }

  return false;
};
