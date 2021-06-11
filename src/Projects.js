import React from "react"
import { Link } from "react-router-dom";
 
function Projects(props) {
  return (
    <div class="mx-auto px-10 space-y-3 max-w-4xl text-left">
      <div class="text-2xl font-medium">
        Here are some of my projects.
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pb-20">

        <Link to="/projects/lightremote">
          <div class="h-auto max-w-sm rounded overflow-hidden shadow-lg hover:bg-gray-100">
            <img class="object-cover w-full" src="/images/thumbnails/lightremote.png" alt="Light Remote" />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">LightRemote</div>
                <p class="text-gray-700 text-base">
                  Control Philips Hue Lights from your web browser.
                </p>
              </div>
            <div class="px-6 pb-2">
            <span class="inline-block bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">PHP</span>
            <span class="inline-block bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">JavaScript</span>
            </div>
          </div>
        </Link>
        
        <Link to="/projects/cryptography-with-go">
          <div class="h-auto max-w-sm rounded overflow-hidden shadow-lg hover:bg-gray-100">
            <img class="object-cover w-full" src="/images/thumbnails/cryptography.png" alt="Cryptography" />
            <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Cryptography with Go</div>
              <p class="text-gray-700 text-base">
                Examples of symmetric and asymmetric encryption using Go's crypto package. Includes one time pad, AES, and digital signatures.
              </p>
            </div>
            <div class="px-6 pb-2">
              <span class="inline-block bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Go</span>
            </div>
          </div>
        </Link>

        <a href="https://github.com/scottng/hourly-shiba-telegram-bot" target="_blank" rel="noreferrer noopener">
          <div class="h-auto max-w-sm rounded overflow-hidden shadow-lg hover:bg-gray-100">
            <img class="oject-cover w-full" src="/images/thumbnails/hourlyshiba.png" alt="Hourly Shiba" />
            <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Hourly Shiba Bot</div>
              <p class="text-gray-700 text-base">
                Telegram bot that sends a new shiba inu picture every hour using Python, Heroku, and the Flickr API.
              </p>
            </div>
            <div class="px-6 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Python</span>
            </div>
          </div>
        </a>

        <a href="https://github.com/scottng/hourly-shiba-telegram-bot" target="_blank" rel="noreferrer noopener">
          <div class="max-w-sm rounded overflow-hidden shadow-lg hover:bg-gray-100">
            <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">This Website</div>
              <p class="text-gray-700 text-base">
                My personal website made with React JS and Tailwind CSS!
              </p>
            </div>
            <div class="px-6 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">JavaScript</span>
            </div>
          </div>
        </a>
        
      </div>
      
    </div>
  )
}
 
export default Projects;