
import addUser from "../../support/helpers/signuphelper";

describe("Conduit: Signup", () => {

    it(" Create new Account", () => {
      addUser.addNewUserViaApi();
    });

  });