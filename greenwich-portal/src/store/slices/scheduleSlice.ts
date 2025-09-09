import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Class {
  id: string;
  subject: string;
  subjectCode: string;
  lecturer: string;
  room: string;
  startTime: string;
  endTime: string;
  date: string;
  status: 'scheduled' | 'in-progress' | 'completed' | 'cancelled';
  attendanceStatus?: 'present' | 'absent' | 'not-marked';
}

interface Task {
  id: string;
  title: string;
  description: string;
  type: 'assignment' | 'project' | 'exam' | 'presentation';
  subject: string;
  deadline: string;
  status: 'new' | 'in-progress' | 'submitted' | 'graded';
  priority: 'low' | 'medium' | 'high';
}

interface ScheduleState {
  classes: Class[];
  tasks: Task[];
  selectedDate: string;
  isLoading: boolean;
  error: string | null;
}

const initialState: ScheduleState = {
  classes: [],
  tasks: [],
  selectedDate: new Date().toISOString().split('T')[0],
  isLoading: false,
  error: null,
};

const scheduleSlice = createSlice({
  name: 'schedule',
  initialState,
  reducers: {
    fetchScheduleStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchScheduleSuccess: (state, action: PayloadAction<{ classes: Class[]; tasks: Task[] }>) => {
      state.classes = action.payload.classes;
      state.tasks = action.payload.tasks;
      state.isLoading = false;
      state.error = null;
    },
    fetchScheduleFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    setSelectedDate: (state, action: PayloadAction<string>) => {
      state.selectedDate = action.payload;
    },
    updateClassAttendance: (state, action: PayloadAction<{ classId: string; status: 'present' | 'absent' }>) => {
      const classIndex = state.classes.findIndex(c => c.id === action.payload.classId);
      if (classIndex !== -1) {
        state.classes[classIndex].attendanceStatus = action.payload.status;
      }
    },
    updateTaskStatus: (state, action: PayloadAction<{ taskId: string; status: Task['status'] }>) => {
      const taskIndex = state.tasks.findIndex(t => t.id === action.payload.taskId);
      if (taskIndex !== -1) {
        state.tasks[taskIndex].status = action.payload.status;
      }
    },
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    removeTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
  },
});

export const {
  fetchScheduleStart,
  fetchScheduleSuccess,
  fetchScheduleFailure,
  setSelectedDate,
  updateClassAttendance,
  updateTaskStatus,
  addTask,
  removeTask,
} = scheduleSlice.actions;

export default scheduleSlice.reducer;