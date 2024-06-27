import React from 'react'
import { TriangleAlert } from "lucide-react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AfHero from '../components/AfHero';


const Atrial = () => {
  return (
    <>
    <Navbar/>
    <AfHero/>
        <div class="flex h-screen mb-8">
          {/* <!-- component --> */}
          <div class="" >
            <form class="max-w-xl min-w-max m-4 p-10 bg-white rounded-3xl shadow-xl">
              <p class="text-gray-800 font-medium">Atrial Fibrillation Prediction</p>
              <div class="grid gap-4 grid-cols-2">
                <div class="mt-2 w-full pr-1">
                  <label class="block text-sm text-gray-600" for="I">I</label>
                  <input class="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded" id="I" name="I" type="text" required="" placeholder="I" aria-label="I"/>
                </div>
                <div class="mt-2 w-full pr-1">
                  <label class="block text-sm text-gray-600" for="II">II</label>
                  <input class="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded" id="II" name="II" type="text" required="" placeholder="II" aria-label="II"/>
                </div>
                <div class="mt-2 w-full pr-1">
                  <label class="block text-sm text-gray-600" for="III">III</label>
                  <input class="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded" id="III" name="III" type="text" required="" placeholder="III" aria-label="III"/>
                </div>
                <div class="mt-2 w-full pr-1">
                  <label class="block text-sm text-gray-600" for="aVF">aVF</label>
                  <input class="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded" id="aVF" name="aVF" type="text" required="" placeholder="aVF" aria-label="aVF"/>
                </div>
                <div class="mt-2 w-full pr-1">
                  <label class="block text-sm text-gray-600" for="aVR">aVR</label>
                  <input class="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded" id="aVR" name="aVR" type="text" required="" placeholder="aVR" aria-label="aVR"/>
                </div>
                <div class="mt-2 w-full pr-1">
                  <label class="block text-sm text-gray-600" for="aVL">aVL</label>
                  <input class="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded" id="aVL" name="aVL" type="text" required="" placeholder="aVL" aria-label="aVL"/>
                </div>
                <div class="mt-2 w-full pr-1">
                  <label class="block text-sm text-gray-600" for="V1">V1</label>
                  <input class="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded" id="V1" name="V1" type="text" required="" placeholder="V1" aria-label="V1"/>
                </div>
                <div class="mt-2 w-full pr-1">
                  <label class="block text-sm text-gray-600" for="V2">V2</label>
                  <input class="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded" id="V2" name="V2" type="text" required="" placeholder="V2" aria-label="V2"/>
                </div>
                <div class="mt-2 w-full pr-1">
                  <label class="block text-sm text-gray-600" for="V3">V3</label>
                  <input class="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded" id="V3" name="V3" type="text" required="" placeholder="V3" aria-label="V3"/>
                </div>
                <div class="mt-2 w-full pr-1">
                  <label class="block text-sm text-gray-600" for="V4">V4</label>
                  <input class="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded" id="V4" name="V4" type="text" required="" placeholder="V4" aria-label="V4"/>
                </div>
                <div class="mt-2 w-full pr-1">
                  <label class="block text-sm text-gray-600" for="V5">V5</label>
                  <input class="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded" id="V5" name="V5" type="text" required="" placeholder="V5" aria-label="V5"/>
                </div>
                <div class="mt-2 w-full pr-1">
                  <label class="block text-sm text-gray-600" for="V6">V6</label>
                  <input class="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded" id="V6" name="V6" type="text" required="" placeholder="V6" aria-label="V6"/>
                </div>
                <div class="mt-2 w-full pr-1">
                  <label class="block text-sm text-gray-600" for="age">AGE</label>
                  <input class="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded" id="age" name="age" type="text" required="" placeholder="age" aria-label="age"/>
                </div>
                <div class="mt-2 w-full pr-1">
                  <label class="block text-sm text-gray-600" for="sex">SEX</label>
                  <input class="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded" id="sex" name="sex" type="text" required="" placeholder="sex" aria-label="sex"/>
                </div>
                <div class="mt-2 w-full pr-1">
                  <label class="block text-sm text-gray-600" for="height">HEIGHT</label>
                  <input class="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded" id="height" name="height" type="text" required="" placeholder="height" aria-label="height"/>
                </div>
                <div class="mt-2 w-full pr-1">
                  <label class="block text-sm text-gray-600" for="weight">WEIGHT</label>
                  <input class="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded" id="weight" name="weight" type="text" required="" placeholder="weight" aria-label="weight"/>
                </div>
              </div>
              
              <div class="mt-4">
                <button class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded w-full" type="submit">PREDICT</button>
              </div>
            </form>
          </div>

          <div>
          <div className="flex flex-wrap m-4 min-w-max ">
              <div className="w-full sm:w-1/2 lg:w-1/3 ">
                <div className="bg-neutral-900 rounded-3xl p-6 text-md border border-neutral-800 ">
                  <h1 class='text-4xl text-red-500 font-semibold'>HIGH RISK<TriangleAlert /></h1>
                  <h1>_</h1>
                  <p>Schedule regular check-ups to monitor your heart health. This includes tracking blood pressure, cholesterol levels, blood sugar levels, and weight.</p>
                  <p>
                  <button class="mt-4 group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 
                hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 
                  hover:duration-500 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 
                  hover:before:blur origin-left hover:decoration-2 hover:text-rose-300 relative
                bg-neutral-800 h-16 w-64 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden
                  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 
                  before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  
                after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg">DOWNLOAD PDF</button></p>
                </div>
              </div>
          </div>
          
        </div>


        {/* <!-- component --> */}
        
      </div>
      <Footer/>
    </>
  )
}

export default Atrial
