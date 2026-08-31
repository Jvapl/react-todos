import { create } from "zustand";
import type { TaskRead, Task } from "../API/DataRecuperation";
import {
    fetchTodosAPI,
    createTodosAPI,
    deleteTodosAPI,
    updateTodosAPI,
    deleteAllTodosAPI
} from "../API/DataRecuperation";

interface TodoState {
    taskPromise: Promise<TaskRead[]>;
    apiError: string | null;
    filterType: string;
    sortType: string;
    fetch: () => void;
    addTask: (task: Task) => Promise<void>;
    deleteTask: (id: number) => Promise<void>;
    editTask: (id: number, updatedTask: Partial<TaskRead>) => Promise<void>;
    setApiError: (error: string | null) => void;
    setFilter: (f: string) => void;
    setSort: (s: string) => void;
    clearError: () => void;
    deleteAll: () => Promise<void>;
}

export const useTodoStore = create<TodoState>((set) => ({
    taskPromise: fetchTodosAPI(),
    apiError: null,
    filterType: "all",
    sortType: "none",

    fetch: () => {
        set({ taskPromise: fetchTodosAPI() });
    },
    addTask: async (task: Task) => {
        try {
            set({ apiError: null });
            await createTodosAPI(task);
            set({ taskPromise: fetchTodosAPI() });
        } catch (error: unknown) {
            const message = error instanceof Error ? error.message : "An unexpected error occurred.";
            set({ apiError: message });
            throw error;
        }
    },
    deleteTask: async (id: number) => {
        try {
            set({ apiError: null });
            await deleteTodosAPI(id);
            set({ taskPromise: fetchTodosAPI() });
        } catch (error: unknown) {
            const message = error instanceof Error ? error.message : "An unexpected error occurred.";
            set({ apiError: message });
            throw error;
        }
    },
    editTask: async (id: number, updatedTask: Partial<TaskRead>) => {
        try {
            set({ apiError: null });
            await updateTodosAPI(id, updatedTask);
            set({ taskPromise: fetchTodosAPI() });
        } catch (error: unknown) {
            const message = error instanceof Error ? error.message : "An unexpected error occurred.";
            set({ apiError: message });
            throw error;
        }
    },
    deleteAll: async () => {
        try {
            set({ apiError: null });
            await deleteAllTodosAPI()
            set({ taskPromise: fetchTodosAPI() });
        } catch (error: unknown) {
            const message = error instanceof Error ? error.message : "An unexpected error occurred.";
            set({ apiError: message });
            throw error;
        }
    },

    setApiError: (error: string | null) => set({ apiError: error }),
    setFilter: (f: string) => set({ filterType: f }),
    setSort: (s: string) => set({ sortType: s }),
    clearError: () => set({ apiError: null })
}));