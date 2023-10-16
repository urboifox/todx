# Todx - Command-Line Todo Application

Todx is a simple command-line Todo application that allows you to manage your tasks right from your terminal. You can add, list, remove, and update your Todos effortlessly. This application stores your tasks in a JSON file, making it easy to keep track of your to-do list.

## Installation

To use Todx, follow these simple steps:

1. **Install Node.js**: Todx is built using Node.js, so you need to have it installed on your system. If you don't have Node.js installed, you can download and install it from [nodejs.org](https://nodejs.org/).

2. **Install the package**: Install the package in your project using NPM.

```bash
  npm i -g todx
```

Now you can use Todx by running todx from your terminal.

## Usage

Todx provides several commands to help you manage your tasks. Here's how you can use them:

### Print Todos File Path

You can print the path to your Todos file using the path command:

```bash
todx path
```

### Add a Todo

Add a new task to your list using the add (or a) command. Replace <Todo> with your task description.

```bash
todx add "Todo"
```

### List All Todos

List all your Todos with the list (or ls) command:

```bash
todx list
```

### Remove a Todo

Remove a task by specifying its index using the remove (or rm) command:

```bash
todx remove 2
```

### Update a Todo

Update an existing Todo by specifying its index and the new value using the update (or up) command:

```bash
todx update 1 "Fix localStorage error"
```

## Contributing

If you encounter any issues or have ideas for improvements, feel free to open an issue or submit a pull request on GitHub.

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/urboifox/todx/blob/master/LICENCE) file for details.

## Author

### [urboifox](https://urboifox.vercel.app/)

Thank you for using Todx! Happy task management in the command line. 📋🚀
