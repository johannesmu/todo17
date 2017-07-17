let appconfig = {
  listviewid:'task-list',
  templateid:'task-template'
}

//template
class TaskTemplate{
  constructor(templateid){
    this.template = document.querySelector('#'+templateid);
    this.item = this.template.querySelector('li');
    this.status = this.item.getAttribute('data-status');
    this.id = this.item.getAttribute('id');
    return this;
  }
}

//task
class Task{
  constructor(name){
    this.id = new Date().getTime();
    this.name = name;
    this.status = 0;
  }
  template(){
    this.template = new TaskTemplate('task-template');
    this.template.id = this.id;
    this.template.status = this.status;
    //clone the template and return the element
    let clone = document.importNode(t.content, true);
  }
}

class List{
  constructor(listid){
    this.list = new Array();
    this.listview = document.getElementById(listid);
    this.updateCount();
  }
  add(taskobj){
    this.list.push(taskobj);
    this.updateCount();
  }
  render(){
    this.clearview();
    let count = this.count;
    let i=0;
    for(i=0;i<this.count;i++){
      let item = this.list[i];
      
    }
  }
  updateCount(){
    this.count = this.list.length;
  }
  clearview(){
    this.listview.innerHTML = "";
  }
}

function appInit(){
  let todo = new App()
}

window.addEventListener('load',appInit);
