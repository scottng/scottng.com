import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { AiFillCaretLeft } from "react-icons/ai";
 
function ProjectLightRemote(props) {
  return (

    <div class="mx-auto pb-20 pt-10 p-10 space-y-3 max-w-4xl text-left">

      <a href="/">
        <div class="text-3xl bg-gray-100 hover:bg-gray-200 rounded-full w-20 text-center py-2"> <AiFillCaretLeft /> </div>
      </a>

      <div class="text-4xl font-medium">
        LightRemote
      </div>
      <div class="text-lg">
        Control Philips Hue lights from your web browser. <br />
        <span class="text-blue-700 hover:text-blue-500"><a href="https://github.com/scottng/lightremote">https://github.com/scottng/lightremote</a></span>
      </div>
      <div>
      </div>

      <Carousel>
        <div>
          <img src="/images/lightremote/rooms.png" alt="Light bulbs in each room" />
          <p className="legend">Light bulbs are grouped by room. Each room has a card with brightness slider, on/off switch, and color picker.</p>
        </div>
        <div>
          <img src="/images/lightremote/color.png" alt="Light bulb controls" />
          <p className="legend">View and control the light bulbs in each room.</p>
        </div>
        <div>
          <img src="/images/lightremote/hue-connect.png" alt="Authentication with Philips Hue"/>
          <p className="legend">User connects their Philips Hue account to control lights remotely.</p>
        </div>
        <div>
          <img src="/images/lightremote/settings.png" alt="Settings page"/>
          <p className="legend">User can update their email, update their password, sign out, and delete their account.</p>
        </div>
        <div>
          <img src="/images/lightremote/messages.png" alt="Messages"/>
          <p className="legend">User can send messages publicly, view messages, and filter messages by category.</p>
        </div>
      </Carousel>

      <div class="text-3xl font-medium">
        About
      </div>
      <div>
      Philips Hue is a range of smart light devices used in many homes. Philips provides a mobile application for
      controlling their lights; however, there is no official web interface for controlling Hue lights and only a few third-party ones.
      There is a sizeable amount of interest for a Hue web interface, for example on the
      <span class="text-blue-700 hover:text-blue-500"><a href="https://www.reddit.com/r/Hue/comments/7ehpni/web_interface_for_controlling_hue_lights/"> Philips Hue subreddit</a></span>.
      I made this web app because I am interested in IoT devices and wanted to fill the need for a Hue web interface. 
      I also use this app to control the lights in my own house.
      </div>

      <div class="text-3xl font-medium">
        Development
      </div>

      <div class="text-xl font-medium">
        Philips Hue API
      </div>
      <div>
        This project uses the Philips Hue Remote API to control Hue lights remotely. First, the user is directed to grant LightRemote access to their
        Philips Hue account. Then, Philips Hue will provide an access token that will be used in API requests.
      </div>

      <div class="text-xl font-medium">
        Front End
      </div>
      <div>
        I used Bootstrap for styling the front end. Each room/light has its own Bootstrap card with a color picker, on/off toggle, and brightness slider. 
        To implement interactivity, each card has event handlers which are defined in lights-ajax.js and rooms-ajax.js.
        
        The frontend uses jQuery/AJAX to relay commands to the backend and generate cards based on the backend response.
      </div>

      <div class="text-xl font-medium">
        Back End
      </div>
      <div>
        The back end is written in PHP without a framework. The back end makes calls to the Philips Hue Remote API, adds new users to
        the database, adds a user's API access token to the database, and adds messages to the database.
      </div>
      <div>
        <img src="/images/lightremote/database.png" class="w-5/6 mx-auto" alt="Database diagram"/>
        The data is stored in a MySQL database.
        The database schema contains three tables: users, messages, and categories. Each user has an access_token which is filled after
        the user grants LightRemote access to their Hue account. A user can send many messages, so users and messages have a
        one-to-many relationship. A message has a category (e.g. electronics, music, miscellaneous).
      </div>

      <div class="text-3xl font-medium">
        Conclusion
      </div>
      <div>
        Working on this project helped teach me JavaScript and PHP development.
        In the future, I would use a web framework such as Laravel to keep the code more organized and speed up development.
      </div>

    </div>
  )
}
 
export default ProjectLightRemote;