
(function (module, S3fs) {
    'use strict';
    
    function S3NuGet(bucket, options) {
        if (!(this instanceof S3NuGet)) {
            return new S3NuGet(bucket, options);
        }

        if (!bucket) {
            throw new Error('bucket is required');
        }
        
        if (typeof bucket !== 'string') {
            throw new Error('bucket must be a string');
        }
        
    }
    
    S3NuGet.prototype.helloWorld = function () {
        return "Hello you crazy world!";
    }

    module.exports = S3NuGet;
}(module, require('s3fs')));
