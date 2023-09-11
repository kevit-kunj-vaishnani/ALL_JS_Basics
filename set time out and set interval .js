


' setTimeout and clearTimeout are functions commonly used in JavaScript to control the execution timing of code. '
' They are used to delay the execution of a function or a code block by a specified amount of time. '


setTimeout = '~ it allows us to run the function only one time after the time interval finishes '
             '~ The setTimeout function is used to execute a given function or code block after a specified delay (in milliseconds).'
            // const timeoutID = setTimeout(function, delay, arg1, arg2, ...);

              '~ The setTimeout function returns a unique ID (timeoutID) that can be used to cancel the scheduled execution using the clearTimeout function.'

            
clearTimeout = ' The clearTimeout function is used to cancel a timeout that has been previously set using setTimeout'
                // clearTimeout(timeoutID);

            
setInterval =        ' it allows us to run the function multiple times after the time interval finishes '
                     ' The setInterval method is a similar to the setTimeout() function. It executes the specified function repeatedly after a time interval.  '
                     ' it is used for recurring tasks like adds which gets displayed on any website'
                     // const intervalID = setInterval(function, delay, arg1, arg2, ...);

                     ' The setInterval function returns a unique ID (intervalID) that can be used to cancel the recurring execution using the clearInterval function. '


clearInterval -      ' To stop the recurring execution, you can use the clearInterval function, passing the intervalID obtained from the setInterval call '
                    //    clearInterval(intervalID);


process.nextTick                  