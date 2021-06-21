import React from "react"
import { Link } from "react-router-dom";
 
function Projects(props) {
  return (
    <div class="mx-auto px-10 space-y-3 max-w-4xl text-left">

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pb-20">

        <Link to="/projects/lightremote">
        <div class="h-auto max-w-sm rounded overflow-hidden bg-gray-100 hover:bg-gray-200">
            <img class="h-32 object-cover w-full" src="/images/thumbnails/lightremote.png" alt="Light Remote" />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">LightRemote</div>
                <p class="text-gray-700 text-base">
                  Control Philips Hue Lights from your web browser.
                </p>
              </div>
          </div>
        </Link>
        
        <Link to="/projects/cryptography-with-go">
        <div class="h-auto max-w-sm rounded overflow-hidden bg-gray-100 hover:bg-gray-200">
            <img class="h-32 object-cover w-full" src="/images/thumbnails/cryptography.png" alt="Cryptography" />
            <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Cryptography with Go</div>
              <p class="text-gray-700 text-base">
                Examples of symmetric and asymmetric encryption.
              </p>
            </div>
          </div>
        </Link>

        <a href="https://github.com/scottng/hourly-shiba-telegram-bot" target="_blank" rel="noreferrer noopener">
        <div class="h-auto max-w-sm rounded overflow-hidden bg-gray-100 hover:bg-gray-200">
            <img class="h-32 oject-cover w-full" src="/images/thumbnails/hourlyshiba.png" alt="Hourly Shiba" />
            <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Hourly Shiba Bot</div>
              <p class="text-gray-700 text-base">
                Telegram bot that sends a shiba inu picture every hour.
              </p>
            </div>
          </div>
        </a>

        <a href="https://github.com/scottng/scottng.com" target="_blank" rel="noreferrer noopener">
        <div class="h-auto max-w-sm rounded overflow-hidden bg-gray-100 hover:bg-gray-200">
            <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">This Website</div>
              <p class="text-gray-700 text-base">
                My personal website in React.
              </p>
            </div>
          </div>
        </a>
        
      </div>
      
    </div>
  )
}
 
export default Projects;