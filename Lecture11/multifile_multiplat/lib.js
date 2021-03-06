(function (module, require) {

  function awesomifier(thing) {
    return thing + " is awesome!"
  }
  module.exports = {
    awesomifier
  }

})(
  typeof window === 'undefined' ? module :
      (window.modules || (window.modules = {})) && (window.modules['./lib'] = {})
  ,
  typeof window === 'undefined' ? require :
    function (path) {
      return window.modules[path].exports
    }
)


/**
 * check if window.modules exists
 *    if not, create it
 *    if yes,
 *      create window.modules[libname]
 *
 * return window.modules[libname]
 */
