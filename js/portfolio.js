/*
portfolio - v - 2014-06-28
Jess Frazelle's Portfolio
Lovingly coded by Jess Frazelle  - http://frazelledazzell.com
*/
var sleep = function(ms, callback) {
    setTimeout(function() {
        callback()
    }, ms)
}, favthings = ["golang", "ruby", 'ice cream', "climbing", "camping", "virtualization"]
    removeClass = function(el, className) {
        el.classList ? el.classList.remove(className) : el.className = el.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ")
    }, addClass = function(el, className) {
        el.classList ? el.classList.add(className) : el.className += " " + className
    }, i = 0,
    nextThing = function(thing) {
        i < favthings.length - 1 ? i++ : i = 0, removeClass(thing, "slideInUp"), addClass(thing, "slideOutDown"), sleep(700, function() {
            thing.innerHTML = favthings[i], removeClass(thing, "slideOutDown"), addClass(thing, "slideInUp")
        })
    };
document.addEventListener("DOMContentLoaded", function() {
    var thing = document.querySelectorAll(".favthing")[0];
    setTimeout(function() {
        nextThing(thing)
    }, 1e3), setInterval(function() {
        nextThing(thing)
    }, 4e3)
});
