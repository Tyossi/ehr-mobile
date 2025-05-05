import { atom } from "recoil";
import implementPersist from "./usePersist";

const userState = atom({
  key: "userState",
  default: {
    user: null,
    token: null,
  },
  effects: [implementPersist("userState")],
});

export { userState };
