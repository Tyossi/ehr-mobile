import { recoilPersist } from "recoil-persist";

const usePersist = (key) => {
  const { persistAtom } = recoilPersist({
    key,
    storage: localStorage,
  });
  return [persistAtom];
};

export default usePersist;
