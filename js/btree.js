
/**
 * @param d String The data associated with this node
 * @param l BTreeNode The left leaf attached to this node
 * @param r BTreeNode The right leaf node
 */
var BTreeNode = function(d, l, r){	

	// data 
	this.data = d || null;
	
	// pointers to left & right leaves
	this.left = l || null;
	this.right = r || null;
				
}

/**
 * Binary tree operations and container
 */
var BinaryTree = function(){
	
	this.root = null;
	
	// returns root BTreeNode 
	this.getRoot = function(){
		return this.root;
	}

	// @param data String|Array The data item you want to insert in to the tree
	this.insert = function(data){ 
		
		// cast the input to an array if it's not already
		var input = (data.constructor.toString().indexOf('Array') < 0) ? [data] : data;
		
		var self = this;
		input.forEach(function(element){
		
			// if non-numeric then translate that number in to an integer before insertion
			if (isNaN(element)){
				elementAsArray = element.split("").map(function(e){				
					return e.charCodeAt(0);
				});
				element = elementAsArray.join("");
			}
						
			self.root = self.inserter(self.root, element);
		});
		
		return this.root;
	}
	
	// private
	this.inserter = function(node, data) { 
	    if (node == null) {
	      node = new BTreeNode(data); 
	    } 
	    else { 
	      if (data <= node.data) { 
	        node.left = this.inserter(node.left, data); 
	      } 
	      else { 
	        node.right = this.inserter(node.right, data); 
	      } 
	    }
	    return node; // return pointer to this node
	}

	return this;

}
