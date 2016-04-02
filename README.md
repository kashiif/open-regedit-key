Introduction
============

OpenRegEditKey is a Firefox/Seamonkey extension that lets you select a 
Windows registry key on a webpage and open Windows registry editor 
(regedit.exe) with that key selected in the editor. 


Building XPI
============

You should have NodeJS and NPM already installed. 

You also need to have grunt-cli installed (first time only):

```
npm install grunt-cli -g
```

Install dependencies (first time only):

```
npm install
```

Afterwards, you can run 

```
grunt
```

everytime you need to create a new xpi. Several `install.rdf` properties
are set through package.json, specially version.

