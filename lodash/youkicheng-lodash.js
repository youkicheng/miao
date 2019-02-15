var youkicheng = {
  chunk: function(ary, size = 1) {
    var result = []
    for(var i = 0; i < ary.length; i = i + size) {
      result.push(ary.slice(i,i + size))
    }
    return result
  },
  compact: function(ary) {
    var result = []
    for(var item of ary) {
      if (item) {
        result.push(item)
      }
    }
    return result
  },
}
