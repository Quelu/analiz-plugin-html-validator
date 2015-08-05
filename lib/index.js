/**
 * HTML validator module for Analiz
 * @type {Object}
 */
module.exports = {

  /**
   * Configuration of the module
   * @type {Object}
   */
  config: {
    name: {
      'en': 'HTML validator',
      'fr': 'Validation HTML'
    },
    // The plugin category
    category: 'html',
    // List of the files the module will analize
    fileTypes: [
      '.html'
    ],
    // Options for the user
    options: [
      {
        name: 'doctype',
        label: {
          'en': 'Document type',
          'fr': 'Type du document'
        },
        type: 'list',
        data : [
          {
            name: 'Auto',
            value: false
          },{
            name: 'HTML5 (experimental)',
            value: 'HTML5'
          },{
            name: 'XHTML 1.0 Strict',
            value: 'XHTML 1.0 Strict'
          },{
            name: 'XHTML 1.0 Transitional',
            value: 'XHTML 1.0 Transitional'
          },{
            name: 'XHTML 1.0 Frameset',
            value: 'XHTML 1.0 Frameset'
          },{
            name: 'HTML 4.01 Strict',
            value: 'HTML 4.01 Strict'
          },{
            name: 'HTML 4.01 Transitional',
            value: 'HTML 4.01 Transitional'
          },{
            name: 'HTML 4.01 Frameset',
            value: 'HTML 4.01 Frameset'
          },{
            name: 'HTML 4.01 + RDFa 1.1',
            value: 'HTML 4.01 + RDFa 1.1'
          },{
            name: 'HTML 3.2',
            value: 'HTML 3.2'
          },{
            name: 'HTML 2.0',
            value: 'HTML 2.0'
          },{
            name: 'ISO/IEC 15445:2000 ("ISO HTML")',
            value: 'ISO/IEC 15445:2000 ("ISO HTML")'
          },{
            name: 'XHTML 1.1',
            value: 'XHTML 1.1'
          },{
            name: 'XHTML + RDFa',
            value: 'XHTML + RDFa'
          },{
            name: 'XHTML Basic 1.0',
            value: 'XHTML Basic 1.0'
          },{
            name: 'XHTML Basic 1.1',
            value: 'XHTML Basic 1.1'
          },{
            name: 'XHTML Mobile Profile 1.2',
            value: 'XHTML Mobile Profile 1.2'
          },{
            name: 'XHTML-Print 1.0',
            value: 'XHTML-Print 1.0'
          },{
            name: 'XHTML 1.1 plus MathML 2.0',
            value: 'XHTML 1.1 plus MathML 2.0'
          },{
            name: 'XHTML 1.1 plus MathML 2.0 plus SVG 1.1',
            value: 'XHTML 1.1 plus MathML 2.0 plus SVG 1.1'
          },{
            name: 'MathML 2.0',
            value: 'MathML 2.0'
          },{
            name: 'SVG 1.0',
            value: 'SVG 1.0'
          },{
            name: 'SVG 1.1',
            value: 'SVG 1.1'
          },{
            name: 'SVG 1.1 Tiny',
            value: 'SVG 1.1 Tiny'
          },{
            name: 'SVG 1.1 Basic',
            value: 'SVG 1.1 Basic'
          },{
            name: 'SMIL 1.0',
            value: 'SMIL 1.0'
          },{
            name: 'SMIL 2.0',
            value: 'SMIL 2.0'
          }
        ]
      }, {
        name: 'charset',
        label: {
          'en': 'Charset',
          'fr': 'Encodage'
        },
        type: 'list',
        data : [
          {
            name: 'Auto',
            value: false,
            isDefault: true
          },{
            name: 'utf-8 (Unicode, worldwide)',
            value: 'utf-8'
          },{
            name: 'utf-16 (Unicode, worldwide)',
            value: 'utf-16'
          },{
            name: 'iso-8859-1 (Western Europe)',
            value: 'iso-8859-1'
          },{
            name: 'iso-8859-2 (Central Europe)',
            value: 'iso-8859-2'
          },{
            name: 'iso-8859-3 (Southern Europe)',
            value: 'iso-8859-3'
          },{
            name: 'iso-8859-4 (North European)',
            value: 'iso-8859-4'
          },{
            name: 'iso-8859-5 (Cyrillic)',
            value: 'iso-8859-5'
          },{
            name: 'iso-8859-6-i (Arabic)',
            value: 'iso-8859-6-i'
          },{
            name: 'iso-8859-7 (Greek)',
            value: 'iso-8859-7'
          },{
            name: 'iso-8859-8 (Hebrew, visual)',
            value: 'iso-8859-8'
          },{
            name: 'iso-8859-8-i (Hebrew, logical)',
            value: 'iso-8859-8-i'
          },{
            name: 'iso-8859-9 (Turkish)',
            value: 'iso-8859-9'
          },{
            name: 'iso-8859-10 (Latin 6)',
            value: 'iso-8859-10'
          },{
            name: 'iso-8859-11 (Latin/Thai)',
            value: 'iso-8859-11'
          },{
            name: 'iso-8859-13 (Latin 7, Baltic Rim)',
            value: 'iso-8859-13'
          },{
            name: 'iso-8859-14 (Latin 8, Celtic)',
            value: 'iso-8859-14'
          },{
            name: 'iso-8859-15 (Latin 9)',
            value: 'iso-8859-15'
          },{
            name: 'iso-8859-16 (Latin 10)',
            value: 'iso-8859-16'
          },{
            name: 'us-ascii (basic English)',
            value: 'us-ascii'
          },{
            name: 'euc-jp (Japanese, Unix)',
            value: 'euc-jp'
          },{
            name: 'shift_jis (Japanese, Win/Mac)',
            value: 'shift_jis'
          },{
            name: 'iso-2022-jp (Japanese, email)',
            value: 'iso-2022-jp'
          },{
            name: 'euc-kr (Korean)',
            value: 'euc-kr'
          },{
            name: 'ksc_5601 (Korean)',
            value: 'ksc_5601'
          },{
            name: 'gb2312 (Chinese, simplified)',
            value: 'gb2312'
          },{
            name: 'gb18030 (Chinese, simplified)',
            value: 'gb18030'
          },{
            name: 'big5 (Chinese, traditional)',
            value: 'big5'
          },{
            name: 'Big5-HKSCS (Chinese, Hong Kong)',
            value: 'big5-HKSCS'
          },{
            name: 'tis-620 (Thai)',
            value: 'tis-620'
          },{
            name: 'koi8-r (Russian)',
            value: 'koi8-r'
          },{
            name: 'koi8-u (Ukrainian)',
            value: 'koi8-u'
          },{
            name: 'iso-ir-111 (Cyrillic KOI-8)',
            value: 'iso-ir-111'
          },{
            name: 'macintosh (MacRoman)',
            value: 'macintosh'
          },{
            name: 'windows-1250 (Central Europe)',
            value: 'windows-1250'
          },{
            name: 'windows-1251 (Cyrillic)',
            value: 'windows-1251'
          },{
            name: 'windows-1252 (Western Europe)',
            value: 'windows-1252'
          },{
            name: 'windows-1253 (Greek)',
            value: 'windows-1253'
          },{
            name: 'windows-1254 (Turkish)',
            value: 'windows-1254'
          },{
            name: 'windows-1255 (Hebrew)',
            value: 'windows-1255'
          },{
            name: 'windows-1256 (Arabic)',
            value: 'windows-1256'
          },{
            name: 'windows-1257 (Baltic Rim)',
            value: 'windows-1257'
          }
        ]
      }
    ]
  },

  /**
   * Analize the files send by Analiz and return the results
   * @param  {Array} files          An array of the files send by Analiz
   * @param  {Object} options       Options chosen by the user
   * @param  {Function} callback    Callback
   */
  run: function ( files, options, callback ) {
    var w3cvalidator = require( 'w3cvalidator' );

    var getErrorObject = function ( errorsArray, resultsArray ) {
      errorsArray.forEach( function( error ) {
        resultsArray.errors.push({
          type: error.type,
          message: error.message,
          line: error.lastLine
        });
      });

      return resultsArray;
    };


    files.forEach(function( file ) {
      w3cvalidator.validate({
        file: file,
        output: 'json',
        doctype: options.doctype.data,
        charset: options.charset.data,
        callback: function ( res ) {
          var results = {
            file: file,
            errors: []
          };

          if ( res.messages ) {
            if ( res.messages.length > 0 ) {
              if ( Array.isArray(res.messages[0]) ) {
                res.messages.forEach( function( subRes ) {
                  getErrorObject( subRes, results );
                });
              } else {
                getErrorObject( res.messages, results );
              }
            }
          }

          callback( null,  results);
        }
      });
    });
  }
};
