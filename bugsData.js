const bugsData = {
  bug1: {
    species: "catepillar",
    url: "https://cdn.glitch.com/07786385-3bbe-4cb3-afd6-93daf3a410b0%2Fweedle.gif?v=1628029052421",
    inInsectory: getCookie("bug1") !== "" ? getCookie("bug1") : false
  },
  bug2: {
    species: "butterfly",
    url: "https://cdn.glitch.com/4eacf0a0-43c5-420b-8e9f-79f9920a7e43%2F4d15eb229e2c8db8dee69efc0d2371e9_w200.gif?v=1628033889295",
    inInsectory: getCookie("bug2") !== "" ? getCookie("bug2") : false
  },
  bug3: {
    species: "bee",
    url: "https://cdn.glitch.com/4eacf0a0-43c5-420b-8e9f-79f9920a7e43%2Ftumblr_maorbj6OOz1rfjowdo1_500.gif?v=1628034201011",
    inInsectory: getCookie("bug3") !== "" ? getCookie("bug3") : false
  },
  bug4: {
    species: "spider",
    url: "https://cdn.glitch.com/4eacf0a0-43c5-420b-8e9f-79f9920a7e43%2F1032270766spider-animated-gif-3.gif?v=1628034672375",
    inInsectory: getCookie("bug4") !== "" ? getCookie("bug4") : false
  },
  bug5: {
    species: "mantis",
    url: "https://cdn.glitch.com/4eacf0a0-43c5-420b-8e9f-79f9920a7e43%2Fdeh9cqn-ecbe27e4-6445-4769-9bc9-9425e57a2195.gif?v=1628034946787",
    inInsectory: getCookie("bug5") !== "" ? getCookie("bug5") : false
  },
  bug6: {
    species: "roach",
    url: "https://cdn.glitch.com/4eacf0a0-43c5-420b-8e9f-79f9920a7e43%2Fgiphy.gif?v=1628035987274",
    inInsectory: getCookie("bug6") !== "" ? getCookie("bug6") : false
  },
  bug7: {
    species: "beetle",
    url: "https://cdn.glitch.com/07786385-3bbe-4cb3-afd6-93daf3a410b0%2Fbeetle.gif?v=1628096007273",
    inInsectory: getCookie("bug7") !== "" ? getCookie("bug7") : false
  },
  bug8: {
    species: "ladybug",
    url: "https://cdn.glitch.com/07786385-3bbe-4cb3-afd6-93daf3a410b0%2Fledyba.gif?v=1628096001767",
    inInsectory: getCookie("bug8") !== "" ? getCookie("bug8") : false
  }
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split('; ');

  for(var i = 0; i <ca.length; i++) {
    
    var c = ca[i];
    
    if (c.indexOf(name) == 0) {
      if (c.length-48-name.length == -1){
        return c.substring(name.length-1, c.length-48);
      }
      return c.substring(name.length, c.length-48);
    }
  }
  return "";
}