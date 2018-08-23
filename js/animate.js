function resize(){
    $('#notifications').height(window.innerHeight - 50);
}

$( window ).resize(function() {resize();});

resize();


var center = '<div id="notifications-full"><div id="notifications-full-close" class="close"><span class="iconb" data-icon=""></span></div><div id="notifications-full-icon"><span class="iconb" data-icon=""></span></div><div id="notifications-full-text">This is a large notification. You can use this notification to display long warnings. This type of notification is not suited for short warnings. As an added bonus you have a big icon at the top.</div></div>';