import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = (set: any) => ({
  allUsers: [],
  setAllUsers: (allUsers: any) =>
    set((state: any) => ({ ...state, allUsers: allUsers })),
});

const useUserStore = create(
    persist(useStore, {
      name: "store",
    })
  );
  
  export default useUserStore;