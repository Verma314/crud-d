module.exports = {

  //just a function to eperiment with modules
  getDate: function () {
    return Date(); 
  },

  sendJsonData: function (data){
    console.log ("got data....");
    console.log(data);
    return 1; //successful
  },
  buildApp: function (){
    // how do I access data here
    console.log("building app from given information....");
    return 1; //successful
  }

}