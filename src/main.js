import "./style.css";
import { animate, stagger, inView, scroll, timeline } from "motion";

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
    scroll(animate(elementderskalparallaxes1, { x: [-100, 200] }), {
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

//animation til quotes der bliver forstørret ved scroll
scroll(
  animate(".scrollzoomq", {
    scale: [1.2, 0.5],
  }),
  {
    target: document.querySelector(".scrollzoom"),
    offset: ["0.5 0.5", "1 1"],
  }
);
//animation til quotes der bliver forstørret ved scroll
scroll(
  animate(".scrollzoomq2", {
    scale: [1.2, 0.5],
  }),
  {
    target: document.querySelector(".scrollzoom2"),
    offset: ["0.5 0.5", "1 1"],
  }
);
//animation til quotes der bliver forstørret ved scroll
scroll(
  animate(".scrollzoomq3", {
    scale: [1.2, 0.5],
  }),
  {
    target: document.querySelector(".scrollzoom3"),
    offset: ["0.5 0.5", "1 1"],
  }
);
//animation til billede der bliver forstørret ved scroll
scroll(
    animate(".scrollzoom5", {
      scale: [1.2, 0.8],
    }),
    {
      target: document.querySelector(".scrollzoomb5"),
      offset: ["0.5 0.5", "1 1"],
    }
  );

scroll(
  animate(".scrollrotate", {
    rotate: ["320deg", "360deg"],
  }),
  {
    target: document.querySelector(".scrollrotateb"),
    offset: ["0.5 0.5", "1 1"],
  }
);

scroll(
  animate(".scrollrotate2", {
    rotate: ["10deg", "0deg"],
  }),
  {
    target: document.querySelector(".scrollrotateb2"),
    offset: ["0.5 0.5", "1 1"],
  }
);

scroll(
  animate(".scrollrotate3", {
    rotate: ["45deg", "0deg"],
  }),
  {
    target: document.querySelector(".scrollrotateb3"),
    offset: ["0.5 0.5", "1 1"],
  }
);

scroll(
  animate(".scrollrotate4", {
    rotate: ["-15deg", "0deg"],
  }),
  {
    target: document.querySelector(".scrollrotateb4"),
    offset: ["0.5 0.5", "1 1"],
  }
);
// animation til footer
scroll(
    animate(".scrollrotate5", {
      rotate: ["-25deg", "0deg"],
    }),
    {
      target: document.querySelector(".scrollrotatef5"),
      offset: ["0.5 0.5", "1 1"],
    }
  );
  // animation til kamera glitch font
// scroll(
//     animate(".text-shadow-drop-center", {
//       rotate: ["-25deg", "0deg"],
//     }),
//     {
//       target: document.querySelector("#glitchfont"),
//       offset: ["0.5 0.5", "1 1"],
//     }
//   );

//   const glitchyh2 = document.querySelector("#glitchfont")

//   inView("#glitchfontcontainer", (Goback) => {

// glitchyh2.classList.add("text-shadow-drop-center");

// return () => {
//     glitchyh2.classList.remove("text-shadow-drop-center")
// };
// });



//Animation til kameraer værktøj der flyver ind
inView(".kamerasamling", () => {
  animate(".kamera1", { x: [2000, 0], y: [500, 0] }, { duration: 1.5 });
  animate(".kamera2", { x: [-1200, 0], y: [-200, 0] }, { duration: 1.5 });
  animate(".kamera3", { x: [3000, 0], y: [5700, 0] }, { duration: 1.5 });
  animate(".kamera4", { x: [-500, 0], y: [900, 0] }, { duration: 1.5 });
  animate(".kamera5", { x: [1800, 0], y: [-2500, 0] }, { duration: 1.5 });

  return () => {
    animate(".kamera1", { x: [2000, 0], y: [0, 0] }, { duration: 1.5 });
    animate(".kamera2", { x: [-1200, 0], y: [0, 0] }, { duration: 1.5 });
    animate(".kamera3", { x: [3000, 0], y: [0, 0] }, { duration: 1.5 });
    animate(".kamera4", { x: [-500, 0], y: [0, 0] }, { duration: 1.5 });
    animate(".kamera5", { x: [1800, 0], y: [0, 0] }, { duration: 1.5 });
  };
});

//Animation til footer der kommer ind
inView(".footerinview", () => {
  animate(".footerinview", { x: [2000, 400] }, { duration: 1 });

//   return () => {
//     animate(".footerinview", { x: [2000, 400] }, { duration: 1 });
//   };
});
