#!/usr/bin/env node
import { Command } from "commander";
import path from "path";
import fs from "fs";

let todosFolder = process.cwd();
let todosFilesPath = path.join(todosFolder, "todx.json");

const program = new Command();
program
  .name("todx")
  .description("Todx is a Todos application in the CLI.")
  .version("1.0.2");

program
  .command("path")
  .description("Print Todos file path")
  .action(() => {
    console.log(todosFilesPath);
  });

program
  .command("add")
  .argument("<name>", "Todo name")
  .alias("a")
  .description("Add a todo")
  .action(async (str) => {
    if (fs.existsSync(todosFilesPath)) {
      fs.readFile(todosFilesPath, "utf8", (err, data) => {
        if (err) {
          console.error("Error reading file", err);
          process.exit();
        }
        const todosAsJs = JSON.parse(data);
        todosAsJs.push({ Todo: str });
        writeTodos(todosAsJs);
      });
    } else {
      writeTodos([{ Todo: str }]);
      console.log(`Created Todos file at ${todosFilesPath}`);
    }
    console.log(`Todo ${str} added`);
  });

program
  .command("list")
  .alias("ls")
  .description("List all todos")
  .action(() => {
    if (fs.existsSync(todosFilesPath)) {
      fs.readFile(todosFilesPath, "utf8", (err, data) => {
        if (err) {
          console.error(err);
          process.exit();
        }
        const jsData = JSON.parse(data);
        console.table(jsData.length > 0 ? jsData : `There are no Todos`);
      });
    } else {
      console.log(`There are no Todos (file doesn't exist)`);
    }
  });

program
  .command("remove")
  .alias("rm")
  .argument("<index>", "Todo index")
  .description("List all todos")
  .action((index) => {
    if (fs.existsSync(todosFilesPath)) {
      fs.readFile(todosFilesPath, "utf8", (err, data) => {
        if (err) {
          console.error(err);
          process.exit();
        }
        const jsTodos = JSON.parse(data);
        if (jsTodos[index]) {
          const newData = jsTodos.filter((todo) => jsTodos[index] !== todo);
          writeTodos(newData);
        } else {
          console.log(`Todo ${index} does not exist`);
        }
        console.log(`Todo ${index} removed`);
      });
    } else {
      console.log("There are no Todos (file doesn't exist)");
    }
  });

program
  .command("update")
  .alias("up")
  .argument("<index>", "Todo index")
  .argument("<value>", "Todo new value")
  .description("Update an existing Todo")
  .action((index, value) => {
    if (fs.existsSync(todosFilesPath)) {
      fs.readFile(todosFilesPath, "utf8", (err, data) => {
        if (err) {
          console.error(err);
          process.exit();
        }
        const jsTodos = JSON.parse(data);
        if (jsTodos[index]) {
          jsTodos[index] = value;
          writeTodos(jsTodos);
          console.log(`Todo ${index} updated`);
        } else {
          console.log(`Todo ${index} was not found`);
        }
      });
    } else {
      console.log(`There are no Todos (file doesn't exist)`);
    }
  });

program.parse();

function writeTodos(todos) {
  fs.writeFile(todosFilesPath, JSON.stringify(todos), "utf8", (err) => {
    if (err) throw new Error("Error writing file", err);
  });
}
