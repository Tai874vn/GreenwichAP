import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserPreferences {
  theme: 'light' | 'dark' | 'system';
  language: 'en' | 'vi';
  notifications: {
    email: boolean;
    push: boolean;
    sms: boolean;
  };
}

interface UserProfile {
  personalInfo: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
    dateOfBirth: string;
  };
  academicInfo: {
    studentId: string;
    major: string;
    batch: string;
    year: number;
    gpa: number;
    campus: string;
  };
  preferences: UserPreferences;
}

interface UserState {
  profile: UserProfile | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: UserState = {
  profile: null,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchUserStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchUserSuccess: (state, action: PayloadAction<UserProfile>) => {
      state.profile = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    fetchUserFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    updateProfile: (state, action: PayloadAction<Partial<UserProfile>>) => {
      if (state.profile) {
        state.profile = { ...state.profile, ...action.payload };
      }
    },
    updatePreferences: (state, action: PayloadAction<Partial<UserPreferences>>) => {
      if (state.profile) {
        state.profile.preferences = { ...state.profile.preferences, ...action.payload };
      }
    },
    clearUser: (state) => {
      state.profile = null;
      state.error = null;
    },
  },
});

export const {
  fetchUserStart,
  fetchUserSuccess,
  fetchUserFailure,
  updateProfile,
  updatePreferences,
  clearUser,
} = userSlice.actions;

export default userSlice.reducer;