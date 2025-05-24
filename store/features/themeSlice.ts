import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../";

type SliceType = {
  value: "light" | "dark";
};

const initialState = {
  value: "dark",
} satisfies SliceType as SliceType;

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    reset: () => initialState,
    mutate: (state, action: PayloadAction<SliceType["value"]>) => {
      state.value = action.payload;
    },
    toggle: (state) => {
      state.value = state.value === "light" ? "dark" : "light";
    },
  },
});

// USAGE: const dispatch = useAppDispatch(); dispatch(themeSliceActions.toggle())
export const themeSliceActions = themeSlice.actions;

// USAGE: const currentTheme = useAppSelector(selectCurrentTheme)
export const selectCurrentTheme = (state: RootState) => state.theme.value;
