let appconfig = {
  listviewid:'task-list',
  templateid:'task-template'
}
//task
class Task{
  constructor(name){
    this.date = new Date().getTime();
    this.name = name;
    this.status = 0;
    return this;
  }
}
//template
class TaskTemplate{
  constructor(templateid,obj){
    this.template = document.querySelector('#'+templateid);
    this.item = this.template.querySelector('li');
    //this.status = this.item.getAttribute('data-status');
    return this.item;
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
      let lt = new TaskTemplate(appconfig.templateid,item);
      
      
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
