var imageCounter=1;function changeImage(e){showDiv(imageCounter+=e)}function showDiv(e){var t,n=document.getElementsByClassName("mySlides");for(e>n.length&&(imageCounter=1),e<1&&(imageCounter=n.length),t=0;t<n.length;t++)n[t].style.display="none";n[imageCounter-1].style.display="block"}function startTime(){const e=new Date;let t=e.getHours(),n=e.getMinutes(),i=e.getSeconds();n=checkTime(n),i=checkTime(i),document.getElementById("clock").innerHTML=t+":"+n+":"+i,setTimeout(startTime,1e3)}function checkTime(e){return e<10&&(e="0"+e),e}showDiv(imageCounter);