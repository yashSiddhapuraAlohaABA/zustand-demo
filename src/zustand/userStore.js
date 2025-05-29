import axios from "axios";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useUserStore = create(
  persist(
    (set) => ({
      users: [],
      loading: false,
      error: null,
      selectedUser: null,
      userLoading: false,
      userError: null,

      fetchUsers: async () => {
        set({ loading: true, error: null });
        try {
          const response = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
          );
          set({ users: response.data, loading: false });
        } catch (err) {
          set({ error: err.message, loading: false });
        }
      },

      fetchUserById: async (id) => {
        set({ userLoading: true, userError: null });
        try {
          const response = await axios.get(
            `https://jsonplaceholder.typicode.com/users/${id}`
          );
          set({ selectedUser: response.data, userLoading: false });
        } catch (err) {
          set({ userError: err.message, userLoading: false });
        }
      },
    }),
    {
      name: "user-store",
      partialize: (state) => ({
        users: state.users,
        selectedUser: state.selectedUser,
      }),
    }
  )
);

export default useUserStore;
