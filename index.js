function saturdayFun ( skate= 'roller-skate' ){
    return `This Saturday, I want to ${skate}!`
}
saturdayFun('go home')

function mondayWork ( job = 'go to the office'){
    return `This Monday, I will ${job}.`
}
 mondayWork ('work from home')

function wrapAdjective(param0 = "*") {
    function message(string = "special") {
      return `You are ${param0}${string}${param0}!`;
    };
    return message;
  };
wrapAdjective("||");
result("a hard worker");