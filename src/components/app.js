import React from 'react';
import CreateTodo from './create-todo';
import TodosLIst from './todos-list';

const todos = [
{
    task: 'Make React tutorial',
    isCompleted: false
},
{
    task: 'Eat dinner',
    isCompleted: true
}
];

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos
    };
  }

  render() {
    return (
      <div>
        <h1>Aarons ToDos App</h1>
        <CreateTodo />
        <TodosLIst todos={this.state.todos}/>
      </div>
    );
  }
}
