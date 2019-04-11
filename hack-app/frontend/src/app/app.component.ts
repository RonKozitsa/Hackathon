import { Component } from '@angular/core';

declare global {
  interface Window { fbAsyncInit: any; }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hack-app';
  description : String = '';


  update() {
      window.fbAsyncInit = () => {
        FB.init({
          appId: '1160904094076285',
          cookie: true,
          xfbml: true,
          version: 'v3.2'
        });
        getData(this.description);
      }; 

    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));


    function getData(description) {
      const ACCESS_TOKEN = 'EAAQf1gwlTX0BAHOoVyb5tiYNZCxs8s5Y5vhrbhwPOR53ArG6XQhDJdN3bZAjaMw8TkCiVPr0n81IpZCzyw7VQv9TuuJklFHiXv2px294djvQ0IRyJQUv0OeTWdj7IW42yhH3Cq3yPtqBBp5SFRXHjS7QvgZAR6qR20GZCZAL2QGyZADHISRbp7YZBzMCkNN0Pb8ZD';
      FB.getLoginStatus(function (response) {
        //#region post description
          FB.api(
            `/452071725334114?access_token=${ACCESS_TOKEN}`,
            'POST',
            { "description": description },
            function (response) {
              console.log(response);      
            }
          );
        //#endregion

        //#region Get comments
          // FB.api(
          //   `/452071725334114?access_token=${ACCESS_TOKEN}`,
          //   'GET',
          //   { "fields": "published_posts{comments}" },
          //   function (response) {
          //       if(response.published_posts && response.published_posts.data){
          //           response.published_posts.data.forEach(x => {
          //               if (x.comments) {
          //                   x.comments.data.forEach(y => {
          //                     console.log(y.message);
          //                   })
          //               }
          //           });
          //       }
          //   }
          // );
        //#endregion

        //#region - Update phone

        // FB.api(
        //     `/452071725334114?access_token=${ACCESS_TOKEN}`,
        //     'Post',
        //     { "phone": "123456789" },
        //     function (response) {
        //       console.log(response);
        //     }
        //   );
        //#endregion

      });
    }



  }

}


