import inquirer from "inquirer";

const todoList: string[] = ["Task1", "Task2", "Task3",]; // preset value in the todo list

do {
    const inq1 = async (todoList: string[]) => {
        let askUser = await inquirer.prompt(
            [
                {
                    type: "list",
                    message: "Do you want to view your ToDo List",
                    name: "viewList",
                    choices: ["Yes", "No",]
                },

            ]
        );
        let viewList: string = askUser.viewList
        //console.log(viewList);
        if (viewList == "No") {
            console.log("Closing ToDo List")
        } else {
            let curd = await inquirer.prompt(
                [
                    {
                        type: "list",
                        message: "Select an action to perform a task",
                        name: "todoOptions",
                        choices: ["add", "update", "view", "delete"]
                    },
                ]
            );
            if (curd.todoOptions == "add") {
                let addTodo = await inquirer.prompt(
                    {
                        type: "input",
                        name: "add",
                        message: "Add Task: "
                    }
                );
                let add: string = addTodo.add;
                todoList.push(add);
                console.log(todoList);

            }

            if (curd.todoOptions == "update") {
                let updateTodo = await inquirer.prompt(
                    {
                        type: "list",
                        message: "Select an item for update.",
                        name: "updateItem",
                        choices: todoList.map(item => item)
                    }
                );
                let addTodo = await inquirer.prompt(
                    {
                        type: "input",
                        name: "add",
                        message: "Add Task: "
                    }
                );
                let newTodoList = todoList.filter(val => val !== updateTodo.updateItem)
                //console.log(newTodoList);
                todoList = [...newTodoList, addTodo.add]
                console.log(todoList);
            };
            if (curd.todoOptions == "view") {
                console.log(todoList);

            };
            if (curd.todoOptions == "delete") {
                let deleteTodo = await inquirer.prompt(
                    {
                        type: "list",
                        message: "Select an item for update.",
                        name: "deleteItem",
                        choices: todoList.map(item => item),
                    }
                );
                let delItem: string = deleteTodo.deleteItem;
                let newTodoList = todoList.filter(val => val !== deleteTodo.deleteItem);
                todoList = newTodoList;
                console.log(todoList);
            }
        }
    }
    inq1(todoList)
} while (true);
