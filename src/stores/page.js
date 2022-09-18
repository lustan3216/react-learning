import create from 'zustand'

const usePageStore = create((set) => ({
  page: 0,
  pageUp: () => set((state) => ({ page: state.page + 1 })),
  // removeAllBears: () => set({ bears: 0 }),
}))

export default usePageStore
