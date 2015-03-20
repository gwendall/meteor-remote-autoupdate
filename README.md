Meteor Remote Autoupdate
========================

Watch a remote server for hot code pushes.

Installation
------------

``` sh
meteor add gwendall:remote-autoupdate
```

Method
----------

**RemoteAutoupdate(url)** (client-only)  
``` javascript
RemoteAutoupdate("http://localhost:5000");
```

What is solves
--------------

Building cross platform services (web + Cordova), you may want to split your project into two separate apps:  
- one holding your Cordova client code (deployed on server A)  
- the other one holding your whole server logic + web views (on server B)  

In this case, you will define a --mobile-server flag while building your Cordova app so that all your DDP connections are made to server B. However, you then lose the ability to receive hot code pushes for your Cordova app, as it will now watch server B for code changes, whilst your Cordova code is on server A.  
This package simply patches the Autoupdate package so that it can watch changes on another server.   Problem solved.

Notes
-----

- Make sure to pass the proper URL holding your client code. Otherwise, you will fall into an infinite refresh loop, as the client will always find a different code on the server.
- Not tested extensively, feel free to report any bug.
