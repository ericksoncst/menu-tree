import React from 'react';
import {Ul,Li} from './styles';
import './menu.css';

function App() {

  const menu = [
    { id: 1, name: "Desktops", parent: 3 },
    { id: 3, name: "Computers", parent: 8 },
    { id: 4, name: "Smartphones", parent: 6 },
    { id: 6, name: "Portables", parent: 3 },
    { id: 7, name: "Tablets", parent: 6 },
    { id: 8, name: "Electronics", parent: null },
    { id: 18, name: "Sports", parent: null },
    { id: 10, name: "TV", parent: 8 },
    { id: 20, name: '11 pol', parent: 7 },
    { id: 13, name: "Remotes", parent: 14 },
    { id: 14, name: "Accessories", parent: 10 },
    { id:21, name: "Tenis", parent: 18 },
    { id:27, name: "Vans", parent: 21 },
    { id:39, name: "Nike", parent: 21 },
    { id: 22, name: "Skate", parent: 18 },
    { id: 23, name: "Halter", parent: 18 },
]

function renderItem(name,hasChildren, submenu) {
  const item = <Li className={hasChildren ? 'has-children' : null} hasChildren onClick={e => {
    e.stopPropagation()
    if(hasChildren) e.target.classList.toggle("open")
  }} >{name}{submenu}</Li>
  return item
}

function renderM(data = menu){
  const menu = []

  const firstLevel = data.filter(item => !item.parent)
  const getFirstLis = firstLevel.map(buildTree)
  getFirstLis.forEach(li =>   menu.push(li))

  function buildTree(item){
    
    const children = data.filter(child => child.parent === item.id);
    const hasChildren = !!children.length
    
    const noChild = [renderItem(item.name,hasChildren,[])]
    
    if(hasChildren){
      const submenu = []
      children.map(buildTree)
      .forEach(li => submenu.push(<Ul>{li}</Ul>))
      const listItem = [renderItem(item.name,hasChildren, submenu)]
      return listItem
    }
    return noChild
  }

  return menu
}

  return (
    <div className="App" id="tree">
      {renderM()}
    </div>
  );
}

export default App;