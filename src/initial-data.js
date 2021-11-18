const initialData = {
  tasks: {
    "task-1": { id: "task-1", content: "任务-1" },
    "task-2": { id: "task-2", content: "任务-2" },
    "task-3": { id: "task-3", content: "任务-3" },
    "task-4": { id: "task-4", content: "任务-4" },
    "task-5": { id: "task-5", content: "任务-5" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "待做",
      taskIds: ["task-1", "task-2", "task-3", "task-4", "task-5"],
    },
    "column-2": {
      id: "column-2",
      title: "进行中",
      taskIds: [],
    },
    "column-3": {
      id: "column-3",
      title: "已完成",
      taskIds: [],
    },
  },
  columnOrder: ["column-1", "column-2", "column-3"],
};

export default initialData;
