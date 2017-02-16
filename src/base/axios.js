var axios = require('axios')
export default {
    get: function (url, data) {
        var options = {
            url: url,
            data: data || {},
            method: 'get',
        };
        this.request(options);
    },
    post: function (url, data) {
        var formData = new FormData();
        for (var item in data) {
            formData.append(item, data[item]);
        }
        var options = {
            url: url,
            data: formData,
            method: 'post',
        };
        return this.request(options);
    },
    request: function (options) {
        var promise = new Promise((resolve, reject) => {
            axios(options)
                .then(function (result) {
                    return result.data;
                })
                .then((result) => {
                    resolve(result);
                })
                .catch(function (err) {
                    reject(err);
                });
        })
        return promise;
    }
}