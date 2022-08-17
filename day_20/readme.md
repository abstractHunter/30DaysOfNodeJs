# Timers

Timer modules exposes a global API which is used to schedule functions to be called later at some given time  


## Set timer methods 
- setImmediate(callback, args**) : schedules a function to be called as soon as possible  
- setInterval(callback, delay, args**) : schedules a function to be called repeatedly with a given delay  
- setTimeout(callback, delay, args**) : schedules a function to be called after a given delay  


## Clear timer methods
- clearImmediate(immediate) : cancels a setImmediate() call  
- clearInterval(timeout) : cancels a setInterval() call  
- clearTimeout(timeout) : cancels a setTimeout() call  