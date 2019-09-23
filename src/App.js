import React, { Component } from 'react';
import './App.css';
class App extends Component {
 constructor() {
   super();
  //  値を保持できるようにconstructorにてstateを定義する
   this.state = {
     todos: [
       { id: 1, text: 'dataを表示する'},
       { id: 2, text: '簡単な構成を知る'}
     ],
     newTodo: { text: ''}
   };
 };

 handleInput = e => {
   const newId = Math.max.apply(null, this.state.todos.map(t => t.id)) + 1;
   this.setState({
    newTodo: {id: newId, text: e.target.value }
   });
 };

 createNewToDoItem = () => {
  this.setState(({ todos, newTodo }) => ({
    todos: [
      ...todos,
      newTodo
    ],
    newTodo: { text: ''}
  }));
 };

 render() {
   return (
     <div className="App">
       <ul>
         {/* map関数 */}
         {this.state.todos.map((item) => {
           return(<li>{item.text}</li>)
         })}
       </ul>
         <div>
           {/* フォームの値の変化を取る際にはonChangeを設定する */}
           {/* フォームが何かが入力されると、onChangeに指定しているhandleInput()が呼ばれstateが更新される */}
           <input type="text" value={this.state.newTodo.text} onChange={this.handleInput}/>
           {/* ボタンをクリックされると、onClickに指定しているonClick={this.createNewToDoItem}が呼ばれる */}
           <button onClick={this.createNewToDoItem}>+</button>
         </div>
     </div>
   );
 }
}
export default App;