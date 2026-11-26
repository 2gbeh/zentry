import { create } from "zustand"

type StateType = {
  templateId: string
  templateText?: string
  pageId: string
  pageText?: string
}

type ActionType = {
  reset: () => void
  setTemplateId: (id: string, text?: string) => void
  setPageId: (id: string, text?: string) => void
}

export type DesignStoreType = StateType & ActionType

const initialState: StateType = {
  templateId: "lanyard",
  pageId: "0",
}

export const useDesignStore = create<DesignStoreType>()((set) => ({
  ...initialState,
  reset: () => set(initialState),

  setTemplateId: (templateId, templateText) =>
    set(() => ({ templateId, templateText })),

  setPageId: (pageId, pageText) => set(() => ({ pageId, pageText })),
}))
