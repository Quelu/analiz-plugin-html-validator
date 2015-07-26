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
    name: 'Module name',
    // The plugin category
    // TODO Define the default categories
    category: '',
    // List of the files the module will analize
    fileTypes: [
      // '.html',
      // '.php'
    ],
    options: [
      // option: defaultValue
    ]
  },

  /**
   * Analize the files send by Analiz and return the results
   * @param  {Array} files          An array of the files send by Analiz
   * @param  {Object} options       Options chosen by the user
   * @param  {Function} callback    Callback
   * @return {Object}               Object that contains results
   */
  run: function ( files, options, callback ) {
    return [];
  }
};
