const interview = function f1(name) {
  if (name === "kunj") {
    return function (topic) {
      console.log(`Hi ${name}.${topic}`);
    };
  } else if (name === "manoj") {
    return function (topic) {
      console.log(`Hi ${name}.${topic}`);
    };
  }
};

interview("kunj")("javascript"); //or
let demo = interview("kunj");
demo("javascript");
