import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "first number" },
    { message: "Enter second number", type: "number", name: "second number" },
    {
        message: "select one of the operators to perform action",
        type: "list",
        name: "operator",
        choices: ["add", "subtract", "multiply", "divide"],
    },
]);
// Conditional statement
if (answer.operator === "add") {
    console.log(answer["first number"] + answer["second number"]);
}
else if (answer.operator === "subtract") {
    console.log(answer["first number"] - answer["second number"]);
}
else if (answer.operator === "multiply") {
    console.log(answer["first number"] * answer["second number"]);
}
else if (answer.operator === "divide") {
    console.log(answer["first number"] / answer["second number"]);
}
else {
    console.log("please select valid operator");
}
