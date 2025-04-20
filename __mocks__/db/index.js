// REFACTOR LATER
const mockConnSuccess = {
    connect(callback) {
      callback();
    },
  };
  
  const mockConnFail = {
    connect(callback) {
      const err = {
        stack: "TEST", 
      };
      callback(err); 
    },
  };

  module.exports = {
    mockConnSuccess,
    mockConnFail,
  };