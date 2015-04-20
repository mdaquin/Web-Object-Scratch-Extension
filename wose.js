(function(ext) {
    ext._shutdown = function() {};
    ext._getStatus = function() {return {status: 2, msg: 'Ready'};};
    var uris=new Array();
    var props=new Array();
    var un="";
    var pw="";

    ext.get_value=function(p,u,cb) {
        $.ajax({
            url:uris[u],
            success: function(data) {
                var st="data";
                if (props[p].indexOf("[")!=0) st+='.';
                st+=props[p];
                console.log(st);
                value=eval(st);
                cb(value);
            },
            error: function(jqXHR, textStatus, errorThrown){
                cb(textStatus+" "+errorThrown);
            },
            username: un,
            password: pw,
            dataType: "json",
            xhrFields: {withCredentials: true},
            crossDomain: true
        });
    };

    ext.set_uri=function(i,u){uris[i]=u;};
    ext.set_prop=function(i,p){props[i]=p;};
    ext.get_uri=function(i){return uris[i];};
    ext.get_prop=function(i){return props[i];};
    ext.set_uname=function(u){un=u};
    ext.set_pass=function(p){pw=p};

    var descriptor = {
        blocks: [
            [' ', 'set address of object %n to %s', 'set_uri', 1, 'https://data.beta.mksmart.org/entity/'],
            [' ', 'define property %n as %s', 'set_prop', 1, 'live'],
            ['R', 'value of property %n for object %n', 'get_value', 1, 1],
            ['r', 'address of object %n', 'get_uri', 1],
            ['r', 'definition of property %n', 'get_prop', 1],
            [' ', 'set username to %s', 'set_uname', ''],
            [' ', 'set password to %s', 'set_pass', ''],
        ]
    };
    ScratchExtensions.register('Web Object Extension', descriptor, ext);
})({});
