import create from "zustand";

const useStore = create((set) => ({
  count: 0,
  data: [
    {
      id: 1,
      name: "이종원",
      age: 19,
      job: "fe",
    },
    {
      id: 2,
      name: "종원이",
      age: 129,
      job: "back",
    },
    {
      id: 3,
      name: "이원종",
      age: 192,
      job: "dev",
    },
  ],
  inc: () => {
    set((state) => ({ count: state.count + 1 }));
  },

  dec: () => {
    set((state) => ({ count: state.count - 1 }));
  },
}));

export default useStore;
