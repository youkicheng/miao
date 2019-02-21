var youkicheng = function() {
  chunk: function(ary, size = 1) {
    var result = []
    for(var i = 0; i < ary.length; i = i + size) {
      result.push(ary.slice(i,i + size))
    }
    return result
  }
  compact: function(ary) {
    var result = []
    for(var val of ary) {
      if(val) {
        result.push(val)
      }
    }
    return result
  }
  difference: function(ary,...arys) {
    var result = []
    var excludearray = [].concat(...arys)
    for(var val of ary) {
      if(!(val in excludearray)) {
        result.push(val)
      }
    }
    return result
  }
  differenceBy:function() {

  }

  fill: function(ary, val, start = 0, end = ary.length) {
    for (var i = start; i < end; i++) {
      ary[i] = val
    }
    return ary
  }
  findIndex:function(ary, size = 1) {
    
  }
  head: function(ary) {
    if(ary.length == 0) {
      return undefined
    } else {
      return ary[0]
    }
  }
  indexOf: function(ary, value, fsromIndex = 0) {
    for (var i = fromIndex; i < ary.length; i++) {
      if (ary[i] == value) {
        return i
      }
    }
    return -1
  }
  join: function(ary, sep = ',') {
    var result = ""
    if (ary.length == 0) {
      retrun result
    } 
    for (var i = 0; i < ary.length - 1; i++) {
      result += ary[i] + sep
    }
    return result + ary.[ary.length - 1]
  }
   ary: function(func, n = func.length) {

   } 
   unary: function(func) {
     return function(...args) {
       var first = args.slice(0,1)
       return func(...first)
     }
   }
   ary: function(func, n=func.length) {
     return function(...args) {
      var initials = args.(0,n)
      return func(...initials)
     }
   }
   flip: function(func) {
     return function(...arys) {
       return func(...ary.reverse())
     }
   }
   negate: function(func) {
    return functon(...args) {
      return !func(...args)
    }
   }

   
   

 }


