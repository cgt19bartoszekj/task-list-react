import axios from "axios";

export const getExampleTasks = async () => {

  try {
    const response = await axios("/task-list-react/exampleTasks.json");

    return await response.data;
  }
  catch (err) {
    console.log(err);
  }

};