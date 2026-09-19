import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getLeads } from "../../services/leadService"

const initialState = {
    leads: [],
    loading: false,
    error: null,
    selectedLead: null,
};


export const fetchLeads = createAsyncThunk(
    "leads/fetchLeads",
    async (_, { rejectWithValue }) => {
        try {
            const response = await getLeads();

            if (!response.success) {
                return rejectWithValue(
                    response.message || "Failed to fetch leads"
                );
            }

            return response.data;
        } catch (error) {
            return rejectWithValue(
                error.message || "Unable to fetch leads"
            );
        }
    }
);



const leadSlice = createSlice({
    name: "leads",
    initialState,

    reducers: {
        setSelectedLead: (state, action) => {
            state.selectedLead = action.payload;
        },

        clearSelectedLead: (state) => {
            state.selectedLead = null;
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchLeads.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchLeads.fulfilled, (state, action) => {
                state.loading = false;
                state.leads = action.payload;
            })
            .addCase(fetchLeads.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

    }
});

export const {
    setSelectedLead,
    clearSelectedLead
} = leadSlice.actions;

export default leadSlice.reducer;