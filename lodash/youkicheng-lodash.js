var youkicheng = function() {
  function chunk(ary, size = 1) {
    var result = []
    for(var i = 0; i < ary.length; i = i + size) {
      result.push(ary.slice(i,i + size))
    }
    return result
  }
  function compact(ary) {
    var result = []
    for(var val of ary) {
      if(val) {
        result.push(val)
      }
    }
    return result
  }
  function difference(ary,...arys) {
    var result = []
    var excludearray = [].concat(...arys)
    for(var val of ary) {
      if(!(val in excludearray)) {
        result.push(val)
      }
    }
    return result
  }

  function fill(ary, val, start = 0, end = ary.length) {
    for (var i = start; i < end; i++) {
      ary[i] = val
    }
    return ary
  }
  function head(ary) {
    if(ary.length == 0) {
      return undefined
    } else {
      return ary[0]
    }
  }
  function indexOf(ary, value, fsromIndex = 0) {
    for (var i = fromIndex; i < ary.length; i++) {
      if (ary[i] == value) {
        return i
      }
    }
    return -1
  }
  function join(ary, sep = ',') {
    var result = ""
    if (ary.length == 0) {
      retrun result
    } 
    for (var i = 0; i < ary.length - 1; i++) {
      result += ary[i] + sep
    }
    return result + ary.[ary.length - 1]
  }
  function unary(func) {
    return function(...args) {
      var first = args.slice(0,1)
      return func(...first)
    }
  }
  function ary(func, n=func.length) {
    return function(...args) {
      var initials = args.(0,n)
      return func(...initials)
    }
  }
  function flip(func) {
    return function(...arys) {
      return func(...ary.reverse())
    }
  }
  function negate(func) {
    return functon(...args) {
      return !func(...args)
    }
  }

   
   

 }()


