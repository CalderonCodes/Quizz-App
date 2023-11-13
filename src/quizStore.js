import { create } from 'zustand'

const useStore = create((set) => ({
    attempts: [],
    addAttempt: (newAttempt) => set((state) => ({ attempts: [...state.attempts, newAttempt] })),
    removeAttempt: (index) => set((state) => ({ attempts: state.attempts.filter((_, i) => i !== index) })),
  }));

  export default useStore;