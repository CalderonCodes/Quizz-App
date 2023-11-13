import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

const useStore = create(persist((set, get) => ({
    attempts: [],
    addAttempt: (newAttempt) => set((state) => ({ attempts: [...state.attempts, newAttempt] })),
    removeAttempt: (index) => set((state) => ({ attempts: state.attempts.filter((_, i) => i !== index) })),
  }),
  {
    name: 'quiz-storage',
  }
  ));

  export default useStore;