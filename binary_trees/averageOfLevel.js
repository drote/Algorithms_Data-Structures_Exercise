// find levels average in a binary tree

const averageOfLevels = function(root) {
    let levels = [];
    leveler(root, 0, levels);
    
    for (let i = 0; i < levels.length; i += 1) {
        let sum = 0;
        for (let j = 0; j < levels[i].length; j += 1) {
            sum += levels[i][j];
        }
        
        levels[i] = sum / levels[i].length;
    }
    
    return levels;
};

function leveler(root, height, levels) {
  if (!root) return;
    
  levels[height] = levels[height] || []
  levels[height].push(root.val);
  
  leveler(root.right, height + 1, levels);
  leveler(root.left, height + 1, levels);
}
