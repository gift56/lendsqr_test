import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Axios } from "../config/config";

const useStore = (set: any) => ({
  allUsers: [],
  loading: false,
  fetchAllUsers: async () => {
    set({ loading: true });
    const response = await Axios.get("/users");

    set({ allUsers: response.data, loading: false });
  },
});

const useUserStore = create(
  persist(useStore, {
    name: "store",
  })
);

export default useUserStore;
