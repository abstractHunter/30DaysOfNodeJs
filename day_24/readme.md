# Child Processes

This module helps us to create many sub-processes or child processes of a single process which can be used to handle the load  

Child processes can be created asynchronously or synchronously depending upon the requirements.  

There are four types of child processes:
- exec: is used to spawn a shell and then runs the command within that shell  
- excFile: similar to exec() except that it spawns the command directly instead of spawning a shell  
- spawn: spawns the child process asynchronously without blocking the node.js event loop  
- fork: spawns a new node.js process and also invokes a specific method which provides inter-process communciation channel established that allow us to send messages between parent process and child process  


exec and execFile cannot handle huge output commands like for instance "find /"  
But spawn can handle huge output commands like for instance "find / -type f"
