casper.start("http://test.manage.c-launcher.com/AndroidDesktop/login", function() {
    this.fillSelectors('form#contact-form', {
        'input[name="username"]':    'guanyujingmei',
        'input[name="password"]':    'guanyujingmei',
        'button[class="btn btn-large newLoginBtn"]': true
    }, true);
});
casper.wait(1000, function() {
    this.capture('1.png');
});
casper.run();