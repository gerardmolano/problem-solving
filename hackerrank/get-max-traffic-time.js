
/**
 * get the minimum time where the max traffic occurs in a server
 * start = [], times where clients entered the server
 * end = [], times where client exited the server
 */

function getMaxTrafficTime(start, end) {
    let min = Math.min(...start);
    let max = Math.max(...end);
    let maxTraffic = 0;
    let traffic = 0;
    let time = min;
    
    for (let i = min; i <= max; i++) {
        if (start.includes(i)) {
            traffic++;
        }
        
        if (traffic > maxTraffic) {
            maxTraffic = traffic;
            time = i;
        }
        
        if (end.includes(i)) {
            traffic--;
        }
    }
    
    return time;

}

console.log(getMaxTrafficTime([2, 3, 7, 4, 7], [4, 5, 8, 7, 10]));

function getMaxTrafficTime2(start, end) {
    
}
