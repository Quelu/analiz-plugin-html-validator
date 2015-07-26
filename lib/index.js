/**
 * Generic template for an Analiz module
 * @type {Object}
 */

module.exports = {

  /**
   * Configuration of the module
   * @type {Object}
   */
  config: {
    // The plugin category
    // TODO Define the default categories
    sCategory: '',
    // List of the files the module will analize
    aFileTypes: [
      // '.html',
      // '.php'
    ],
  },

  /**
   * Analize the files send by Analiz and return the results
   * @param  {Array} aFiles       An array of the files send by Analiz
   * @param  {Object} oOptions    Options chosen by the user
   * @param  {Function} fNext     Callback
   * @return {Object}             Object that contains results
   */
  run: function ( aFiles, oOptions, fNext ) {

  }
};
