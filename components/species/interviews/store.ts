import { create } from "zustand"

type StateType = {
  jobId: string
  jobText?: string
  profileId: string
  profileText?: string
  searchQuery: string
  expandMultiple?: boolean
}

type ActionType = {
  reset: () => void
  setJobId: (id: string, text?: string) => void
  setProfileId: (id: string, text?: string) => void
  setSearchQuery: (query: string) => void
  toggleExpandMultiple: () => void
}

export type InterviewStoreType = StateType & ActionType

const initialState: StateType = {
  jobId: "0",
  profileId: "0",
  searchQuery: "",
}

export const useInterviewStore = create<InterviewStoreType>()((set) => ({
  ...initialState,
  reset: () => set(initialState),

  setJobId: (jobId, jobText) => set(() => ({ jobId, jobText })),

  setProfileId: (profileId, profileText) =>
    set(() => ({ profileId, profileText })),

  setSearchQuery: (searchQuery) => set(() => ({ searchQuery })),

  toggleExpandMultiple: () =>
    set((s) => ({ expandMultiple: !s.expandMultiple })),
}))
