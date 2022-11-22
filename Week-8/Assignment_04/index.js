/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (_, edges, source, destination) {
  if (source === destination) return true;

  const uf = {};
  for (const [u, v] of edges) {
    if (uf[u] == undefined) uf[u] = new Set();
    if (uf[v] == undefined) uf[v] = new Set();

    uf[u].add(v);
    uf[v].add(u);
  }

  const visited = new Set();

  const dfs = (x, target) => {
    if (visited.has(x) || !(x in uf)) return false;
    visited.add(x);
    const neighbours = uf[x];
    if (neighbours.has(target)) return true;
    return Array.from(neighbours).some((neighbour) => dfs(neighbour, target));
  };

  return dfs(source, destination);
};
