export default function createScroller(scrollConfig) {
  // === VARIABLES ===
  const afterSections = $(".after-sections");
  const navScroll = $("<div></div>").addClass("nav-control");
  let open = 0;
  let scrollable = true;
  let ts_x = 0;
  let ts_y = 0;

  // === SCROLL ===
  function scroll(behavior, direction, wait) {
    if (direction === "down") {
      open++;
    } else if (direction === "up") {
      open--;
    }
    $(document.body).animate(
      {
        scrollTop: window.innerHeight * open,
      },
      scrollConfig.duration
    );
    if (wait === true) {
      scrollable = false;
      setTimeout(() => {
        scrollable = true;
      }, scrollConfig.waitingTime);
    }
    updateSectionAnnouncement(open); // Anunciar sección al hacer scroll
  }

  // === ACTIVE SCROLL ===
  function activeScroll() {
    if (scrollConfig.showControls === true) {
      const controllers = $(".nav-control button");
      controllers.each(function (itemIndex) {
        itemIndex !== open
          ? $(this).removeClass("active").attr("aria-pressed", "false") // Estado
          : $(this).addClass("active").attr("aria-pressed", "true"); // Estado
      });
    }
  }

  // === RESIZE SECTIONS ===
  function resizeSections(sections) {
    sections.each(function () {
      document.body.style.height = `${window.innerHeight}px`;
      $(this).css("height", `${window.innerHeight}px`);
    });
  }

  // === UPDATE SECTIONS WHEN RESIZE ===
  function updateSectionWhenResize(sections) {
    window.addEventListener("resize", () => {
      resizeSections(sections);
      scroll("auto");
    });
  }

  // === UPDATE SECTIONS WHEN WHEEL ===
  function updateSectionWhenWheel(sections) {
    window.addEventListener("wheel", (e) => {
      if (e.deltaY > 0 && open < sections.length - 1 && scrollable) {
        scroll("smooth", "down", true);
      } else if (e.deltaY < 0 && open > 0 && scrollable) {
        if (!afterSections.length || afterSections.scrollTop() === 0) {
          scroll("smooth", "up", true);
        }
      } else if (
        open + 1 === sections.length &&
        scrollable &&
        afterSections.length
      ) {
        scroll("smooth", "down", true);
      }
      activeScroll();
    });
  }

  // === UPDATE SECTIONS WHEN KEY DOWN ===
  function updateSectionWhenKeydown(sections) {
    window.addEventListener("keydown", (e) => {
      if (e.code === "ArrowDown") {
        if (open < sections.length - 1) {
          scroll("smooth", "down", true);
        } else if (
          open + 1 === sections.length &&
          scrollable &&
          afterSections.length
        ) {
          scroll("smooth", "down", true);
        }
      } else if (e.code === "ArrowUp" && open > 0) {
        if (!afterSections.length || afterSections.scrollTop() === 0) {
          scroll("smooth", "up", true);
        }
      }
      activeScroll();
    });
  }

  // === UPDATE SECTIONS WHEN TOUCH ===
  function updateSectionWhenTouch(sections) {
    window.addEventListener("touchstart", (e) => {
      ts_x = e.touches[0].clientX;
      ts_y = e.touches[0].clientY;
    });
    window.addEventListener("touchend", (e) => {
      const td_x = e.changedTouches[0].clientX - ts_x;
      const td_y = e.changedTouches[0].clientY - ts_y;
      if (Math.abs(td_x) <= Math.abs(td_y)) {
        // Drag up
        if (td_y < 0) {
          if (open < sections.length - 1) {
            scroll("smooth", "down");
          } else if (
            open + 1 === sections.length &&
            scrollable &&
            afterSections.length
          ) {
            scroll("smooth", "down");
          }
        }
        // Drag down
        else if (td_y > 0 && open > 0) {
          if (!afterSections.length || afterSections.scrollTop() === 0) {
            scroll("smooth", "up");
          }
        }
        activeScroll();
      }
    });
  }

  // === SECTION ANNOUNCEMENT ===
  function updateSectionAnnouncement(index) {
    const announcement = `Sección ${index + 1} seleccionada.`;
    $("#announcement-area").text(announcement).attr("aria-live", "assertive");
  }

  // === INIT ===
  const jpage = $(".jpage");
  const sections = $(".jpage .section");
  updateSectionWhenResize(sections);
  updateSectionWhenWheel(sections);
  updateSectionWhenTouch(sections);
  updateSectionWhenKeydown(sections);
  resizeSections(sections);

  if (scrollConfig.showControls === true) {
    sections.each(function (index) {
      const button = $("<button></button>")
        .attr("aria-label", `Ir a la sección ${index + 1}`)
        .attr("aria-pressed", index === open) // Estado
        .on("click", function () {
          open = index;
          activeScroll();
          scroll("smooth");
          updateSectionAnnouncement(index); // Anunciar sección
        });

      if (index === 0) {
        button.addClass("active").attr("aria-pressed", "true"); // Estado
      }

      navScroll.append(button);
    });
    jpage.append(navScroll);
  }
}
