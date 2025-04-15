const getLogoutView = (req, res) => {
    res.render('logout');
  };
  
  const killAplication = (req, res) => {
    // np. getProcessLog();
    process.exit();
  };
  
  module.exports = {
    getLogoutView,
    killAplication
  };
  