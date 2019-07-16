/* --- Hanoi recursive function --- */

const hanoiTowerRecursive = (disc, src, aux, dest) => {
  if(disc > 0){
    hanoiTowerRecursive(disc -1, src, dest, aux);
    console.log(`Move disc ${disc} from ${src} to ${dest}`);
    hanoiTowerRecursive(disc -1, aux, src, dest);
  }
};

hanoiTowerRecursive(4,'src','aux','dest');