console.log("Be Happy");

const timenode = Array.from(document.querySelectorAll(`[data-time]`));
console.log(timenode);

const seconds = timenode.map(node => node.dataset.time).map(timecode => {
  const [mins, sec]  = timecode.split(':').map(parseFloat);
  return (mins * 60) + sec;
})
.reduce((total, vidsec) => total + vidsec);


console.log(seconds);

let secleft = seconds;

const hour = Math.floor(secleft / 3600);
secleft = secleft%3600;
const mins = Math.floor(secleft / 60);
secleft = secleft % 60;

console.log(hour+" hr /", mins+" min /", secleft+" sec");

const output = document.querySelector('h1').innerHTML = "Total time : " + hour +" / "+ mins +" / "+ secleft;
