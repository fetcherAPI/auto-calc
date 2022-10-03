import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  costOfTheCar: "3300000",
  initialPaymentPercent: "13",
  initialPaymentAmount: "0",
  perMonthPay: "0",
  totalAmountLease: "0",
  leaseTerm: "60",
  status: null,
  error: null,
};

export const postData = createAsyncThunk(
  "inputData/postData",
  async function (data, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch("https://eoj3r7f3r4ef6v4.m.pipedream.net", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      });
      dispatch(setCostOfTheCar("1000000"));
      dispatch(setInitialPaymentPercent("1"));
      dispatch(setLeaseTerm("1"));

      if (!response.ok) {
        throw new Error("Что то пошло не так");
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const inputDataSlice = createSlice({
  name: "inputData",
  initialState,
  extraReducers: {
    [postData.pending]: (state, action) => {
      state.status = "loading";
      state.error = null;
    },
    [postData.fulfilled]: (state, action) => {
      state.status = "resolve";
    },
    [postData.error]: (state, action) => {
      state.error = "error";
    },
  },
  reducers: {
    setCostOfTheCar(state, action) {
      state.costOfTheCar = action.payload;
    },
    setInitialPaymentPercent(state, action) {
      state.initialPaymentPercent = action.payload;
    },
    setInitialPaymentAmount(state, action) {
      state.initialPaymentAmount = action.payload;
    },
    setLeaseTerm(state, action) {
      state.leaseTerm = action.payload;
    },
    setPerMonthPay(state, action) {
      state.perMonthPay = action.payload;
    },
    setTotalAmountLease(state, action) {
      state.totalAmountLease = action.payload;
    },
  },
});

export const {
  setCostOfTheCar,
  setInitialPaymentPercent,
  setLeaseTerm,
  setInitialPaymentAmount,
  setPerMonthPay,
  setTotalAmountLease,
} = inputDataSlice.actions;
export default inputDataSlice.reducer;
