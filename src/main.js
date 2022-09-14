import "./style.css";
import { animate, stagger, inView, scroll, timeline } from "motion";

// animate("body", { opacity: [0, 1] }, { duration: 5 });



scroll(animate(".progress-bar", { scaleX: [0, 1] }));

document
  .querySelectorAll(".parallaxcontainerp")
  .forEach((parallaxcontainer) => {
    const elementderskalparallaxes = parallaxcontainer.querySelector("div");
    scroll(animate(elementderskalparallaxes, { y: [-200, 300] }), {
      target: elementderskalparallaxes,
    });
  });

document
  .querySelectorAll(".parallaxcontainerinfo")
  .forEach((parallaxcontainer) => {
    const elementderskalparallaxes1 = parallaxcontainer.querySelector("div");
    scroll(animate(elementderskalparallaxes1, { x: [-200, 500] }), {
      target: elementderskalparallaxes1,
    });
  });

  document
  .querySelectorAll(".parallaxcontainerinfo2")
  .forEach((parallaxcontainer2) => {
    const elementderskalparallaxes2 = parallaxcontainer2.querySelector("div");
    scroll(animate(elementderskalparallaxes2, { x: [600, 1500] }), {
      target: elementderskalparallaxes2,
    });
  });


  scroll(
    animate(".scrollzoomq", { 
      scale: [1.2, 0.5]    
    }),
    { 
      target: document.querySelector(".scrollzoom"),
      offset: ["0.5 0.5", "1 1"]
   }
  )
  scroll(
    animate(".scrollzoomq2", { 
      scale: [1.2, 0.5]    
    }),
    { 
      target: document.querySelector(".scrollzoom2"),
      offset: ["0.5 0.5", "1 1"]
   }
  )

  scroll(
    animate(".scrollrotate", { 
      rotate: ["320deg", "360deg"]    
    }),
    { 
      target: document.querySelector(".scrollrotateb"),
      offset: ["0.5 0.5", "1 1"]
   }
  )

  scroll(
    animate(".scrollrotate2", { 
      rotate: ["40deg", "0deg"]    
    }),
    { 
      target: document.querySelector(".scrollrotateb2"),
      offset: ["0.5 0.5", "1 1"]
   }
  )


const video = document.querySelector("#videofilmrulle");
video.pause();

scroll(
  ({ y }) => {
    if (!video.readyState) return;
    video.currentTime = video.duration * y.progress;
  },
  {
    target: document.querySelector(".videoarticle"),
    offset: ["-100vh", "end end"]
  }
);