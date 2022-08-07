# NPM

## Node Package Manager helps us to install , update, remove and publish packages

package.json is a way to manage the locally installed packages
we can create this file with this command : `> npm init`


## Installing packages
If we are having a package.json file in our project , 
then we can install all our dependencies using ` > npm install` command.

We can install a package using `> npm install <package_name>` command.
This will install the package in the node_modules folder.
We can also install a package globally using `> npm install -g <package_name>` command.

To install a specific version of a package we can use `> npm install <package_name>@<version_number>` command.


## Updating packages
We can update all our packages using `> npm update` command.
To see if there are any updates available for a package we can use `> npm outdated` command.

Updating a specific package can be done using `> npm update <package_name>` or `> npm update -g <package_name>`if it is a global package.


## Removing packages
We can remove a package using `> npm uninstall <package_name>` command or `> npm uninstall -g <package_name>` if it is a global package.
To remove the package from the package.json file we can use `> npm uninstall <package_name> --save`.


