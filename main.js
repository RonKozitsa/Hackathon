
window.fbAsyncInit = function () {
    FB.init({
        appId: '212733636066119',
        cookie: true,
        xfbml: true,
        version: 'v3.2'
    });
    getData();
};

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) { return; }
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


function getData() {
    ACCESS_TOKEN = 'EAAQf1gwlTX0BACxRCZCHTdZCGXUZCiGB2ZANFXKAZC8EWRmwUJnv07CYxf8lyQb7FyRV20Iawzh7ZCIwHB5GXLZAf0sEfF8r0T3opeKeB4EZAyzETZBZAzkD8LMLCszmnA2I3zw8lCa3S2KKN2rHn6BHl5YwpHaeIVj3vvsLBrrHQ1nc9x324SWC2Km0rEoKgab5UZD';
    FB.getLoginStatus(function (response) {
        //#region post description
        //   FB.api(
        //     `/452071725334114?access_token=${ACCESS_TOKEN}`,
        //     'POST',
        //     { "description": "HackHackHack" },
        //     function (response) {
        //       console.log(response);
        //     }
        //   );
        //#endregion

        //#region Get comments
        //   FB.api(
        //     `/452071725334114?access_token=${ACCESS_TOKEN}`,
        //     'GET',
        //     { "fields": "published_posts{comments}" },
        //     function (response) {
        //         if(response.published_posts && response.published_posts.data){
        //             response.published_posts.data.forEach(x => {
        //                 if (x.comments) {
        //                     x.comments.data.forEach(y => {
        //                         console.log(y.message);
        //                     })
        //                 }
        //             });
        //         }
        //     }
        //   );
        //#endregion

        //#region - Update phone

        // FB.api(
        //     `/452071725334114?access_token=${ACCESS_TOKEN}`,
        //     'Post',
        //     { "phone": "0524587655" },
        //     function (response) {
        //       console.log(response);
        //     }
        //   );
        //#endregion

    });
}

