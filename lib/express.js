function app(req,res) {

}
var routers={};
app.route=function (path,method,fn){
method=path.toLowerCase();
routers[method]={};
routers[method][path]=fn;
};

app.get=function (path,handler) {
  app.route(path,'get',handler)
};
app.post=function (path,handler) {
  app.route(path,'post',handler)
};
app.put=function (path,handler) {
  app.route(path,'put',handler)
};
app.head=function (path,handler) {
  app.route(path,'head',handler)
};
app.options=function (path,handler) {
  app.route(path,'options',handler)
};
app.connect=function (path,handler) {
  app.route(path,'connect',handler)
};
app.patch=function (path,handler) {
  app.route(path,'patch',handler)
};
app.trace=function (path,handler) {
  app.route(path,'trace',handler)
};
app.delete=function (path,handler) {
  app.route(path,'delete',handler)
};

module.exports=app;
