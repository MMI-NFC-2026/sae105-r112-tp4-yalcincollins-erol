// *** ACCORDEON ***

document.querySelectorAll(".accordeon").forEach((accordeon) => {
  const detailsElements = accordeon.querySelectorAll(":scope > details");

  detailsElements.forEach((details) => {
    details.addEventListener("toggle", () => {
      if (!details.open) {
        return;
      }

      detailsElements.forEach((otherDetails) => {
        if (otherDetails !== details) {
          otherDetails.open = false;
        }
      });
    });
  });
});
