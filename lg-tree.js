
function TreeNode(data, children) {
  this.data = data
  this.children = children || []
}

TreeNode.prototype.depthFirstSearch = function (toFind, toVisit) {
  toVisit = toVisit || []
  console.log('\nEXAMINING ', this.data)
  if (toFind === this.data) {
    console.log('FOUND IT!! ', this.data)
    return true
  }

  if (this.children.length === 0) {
    if (toVisit.length === 0) {
      console.log('DID NOT FIND SAD PANDA')
      return false
    }
  } else {
    console.log('adding kids: ', this.children)
    toVisit = toVisit.concat(this.children)
  }

  // find the next one AND REMOVE
  const nextNode = toVisit.pop()
  // to make breadth first:
  // const nextNode = toVisit.shift()

  console.log('about to visit ', nextNode.data)
  return nextNode.depthFirstSearch(toFind, toVisit)
}

const james = new TreeNode('James')
const laToya = new TreeNode('laToya')
const patrick = new TreeNode('patrick')
const jack = new TreeNode('jack')
const celeste = new TreeNode('celeste')
const kelcey = new TreeNode('kelcey')
const jonathan = new TreeNode('jonathan')
const alex = new TreeNode('alex')
const bonnie = new TreeNode('bonnie', [james, laToya])
const punit = new TreeNode('punit', [patrick, jack])
const dev = new TreeNode('dev', [celeste, kelcey])
const di = new TreeNode('di', [jonathan, alex])

const carla = new TreeNode('Carla', [bonnie, punit, dev, di])

console.log('return value ', carla.depthFirstSearch('jenn'))