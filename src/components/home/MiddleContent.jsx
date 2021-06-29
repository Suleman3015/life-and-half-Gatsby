import React from 'react'
import Button from '../../Reusable-Components/Button';
import '../../styles/home/middleContent.css'
import Arrow from '../../svgs/arrow';

const MiddleContent = () => {
    return (
        <div className="middle-comtent">
            <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-60 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <img 
        className="w-25 h-25 mb-8 object-cover object-center inline-block"
        src="https://2hrmp9bzmmx3f0xil1wyssgx-wpengine.netdna-ssl.com/wp-content/uploads/2021/02/icIllustrationHomeInspireVisitors.svg"
        alt="pic" />
        <p style={{letterSpacing: '1px', wordSpacing: '2px'}} className="text-gray sm:text-2xl mb-3">
            Inspire visitors
        </p>
      <h1 className="title-font sm:text-6xl font-black text-3xl mb-5 font-large text-gray-900">
      ONE-TO-MANY VIDEO 
        <br className="hidden lg:inline-block" />
        SHOPPING
      </h1>
      <p className="mb-8 leading-relaxed">
      Bring products to life by adding the power of authentic, one-to-many video shopping to your online store.
      </p>
      <div className="middle-content__button">
        <button className="middle-content-btn">explore this feature <Arrow/> </button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
    <video className="object-cover object-center rounded" preload="auto" playsinline="" loop autoPlay muted poster="https://www.usehero.com/wp-content/uploads/2021/02/imgInspireStatic@2x.jpg">
        <source src="https://2hrmp9bzmmx3f0xil1wyssgx-wpengine.netdna-ssl.com/wp-content/uploads/2021/01/vidShoppableStories.mp4" />
    </video>
    </div>
  </div>
</section>
        </div>
    )
};

export default MiddleContent
