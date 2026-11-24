import { create } from "zustand"

type StateType = {
  jobId: string
  profileId: string
  searchQuery: string
}

type ActionType = {
  reset: () => void
  setJobId: (id: string) => void
  setProfileId: (id: string) => void
  setSearchQuery: (query: string) => void
}

type StoreType = StateType & ActionType

const initialState: StateType = {
  jobId: "0",
  profileId: "0",
  searchQuery: "",
}

export const useInterviewStore = create<StoreType>()((set) => ({
  ...initialState,
  reset: () => set(initialState),
  setJobId: (jobId) => set(() => ({ jobId })),
  setProfileId: (profileId) => set(() => ({ profileId })),
  setSearchQuery: (searchQuery) => set(() => ({ searchQuery })),
}))
