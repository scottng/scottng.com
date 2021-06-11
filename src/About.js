import React from "react"
import { AiFillGithub, AiFillFilePdf, AiOutlineMail } from "react-icons/ai";
 
function About(props) {
  return (
    <div class="mx-auto pt-10 p-10 space-y-3 max-w-4xl text-left">
      <div class="text-4xl font-medium">
        Hi! I'm <span class="text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-700">Scott</span>, a <span class="text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-blue-700">software developer</span> who just graduated from <span class="text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-red-700">USC</span>. 
      </div>
      <div class="text-lg">
      I make websites, play with IoT devices, and solve crossword puzzles.
      </div>

      <div class="grid grid-cols-3 w-80">
        <a href="https://github.com/scottng" target="_blank" rel="noreferrer noopener">
          <div class="bg-gray-100 hover:bg-gray-200 rounded-full w-20 text-center py-2">
              <AiFillGithub class="mx-auto text-3xl " /> 
          </div>
        </a>
        
        <a href="mailto:scottng@scottng.com">
          <div class="bg-gray-100 hover:bg-gray-200 rounded-full w-20 text-center py-2">
              <AiOutlineMail class="mx-auto text-3xl "/> 
          </div>
        </a>
        
        <a href="#" target="_blank" rel="noreferrer noopener">
          <div class="bg-gray-100 hover:bg-gray-200 rounded-full w-20 text-center py-2">
              <AiFillFilePdf class="mx-auto text-3xl " /> 
          </div>
        </a>
      </div>
    </div>
  )
}
 
export default About;