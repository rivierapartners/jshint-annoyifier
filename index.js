var notifier = require('node-notifier');

module.exports = {
  setNotifier: function(notifier) {
    notifier = notifier;
  },

  reporter: function(errors) {
    var errorsPerFile = {};
    errors.map(function(error) {
      if (!errorsPerFile[error.file]) {
        errorsPerFile[error.file] = 0;
      }
      errorsPerFile[error.file] += 1;
    });

    for (var file in errorsPerFile) {
      if (errorsPerFile.hasOwnProperty(file)) {
        notifier.notify({
            title: 'jshint errors',
            message: file + ' : ' + errorsPerFile[file] + ' errors.'
        });
      }
    }
  }
};
