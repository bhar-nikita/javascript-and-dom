//Assignment -Part1

let tag = document.getElementById("tag-line");

let headings = document.querySelectorAll(".bg-main-content h2");

let collect = `${tag.textContent}\n`;
for(let heading of headings)
    {
        collect += `${heading.textContent}\n`;
    }

alert(collect);


//Assignment -part2

let  data = document.getElementsByClassName("bg-main-content")[0];
let when_to_launch = data.getElementsByClassName("box")[12];
let info = when_to_launch.children;
collect = `${info[0].textContent}\n`;
var nik;
for (nik = 1; nik < info.length; nik++) {
  	collect += `${info[nik].textContent}\n`;
}
alert(collect);

