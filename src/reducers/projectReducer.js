const initialState = {
  projects: [
    {
      id: "1",
      title: "Project title 1",
      content: "this is content for title 1",
    },
    {
      id: "2",
      title: "Project title 2",
      content: "this is content for title 2",
    },
    {
      id: "3",
      title: "Project title 3",
      content: "this is content for title 3",
    },
  ],
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
      return state;

    case "CREATE_PROJECT_ERROR":
      console.log("create project error", action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
