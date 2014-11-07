 window.addEventListener('polymer-ready', function(e) {
    var ajax = document.querySelector('.api-ajax');
    ajax.addEventListener('core-response', function(e) {
        document.querySelector('.template-ajax').model = {
            response: e.detail.response
        };
    });
    ajax.go(); // Call its API methods.
});