import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const saveMedicationSchedule = createAsyncThunk(
  'medication/saveSchedule',
  async (payload, thunkAPI) => {
    try {
      console.log('🟡 PAYLOAD:', payload);

      const { userId, medicationId, times } = payload;

      const res = await fetch('http://10.0.2.2:4000/medication-schedules', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, medicationId, times }),
      });

      if (!res.ok) {
        const text = await res.text();
        return thunkAPI.rejectWithValue(text || 'Error servidor');
      }

      const data = await res.json();
      console.log('✅ DATA:', data);

      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message || 'Error de red');
    }
  }
);

const medicationSlice = createSlice({
  name: 'medication',
  initialState: {
    selectedMedication: null, // ✅ ahora ES SOLO UN NUMERO
    times: [],
    loading: false,
    error: null,
    success: false,
  },
  reducers: {
    setSelectedMedication(state, action) {
      state.selectedMedication = action.payload; // ✅ SOLO ID
    },

    addTime(state, action) {
      if (!state.times.includes(action.payload)) {
        state.times.push(action.payload);
        state.times.sort();
      }
    },

    removeTime(state, action) {
      state.times = state.times.filter(t => t !== action.payload);
    },

    resetMedicationForm(state) {
      state.selectedMedication = null;
      state.times = [];
      state.error = null;
      state.success = false;
      state.loading = false; // ✅ importante
    },
  },

  extraReducers: builder => {
    builder
      .addCase(saveMedicationSchedule.pending, state => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(saveMedicationSchedule.fulfilled, state => {
        state.loading = false;
        state.success = true;
      })
      .addCase(saveMedicationSchedule.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {
  setSelectedMedication,
  addTime,
  removeTime,
  resetMedicationForm,
} = medicationSlice.actions;

export default medicationSlice.reducer;
