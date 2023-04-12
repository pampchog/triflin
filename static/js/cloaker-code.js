let inFrame;
try {
  inFrame = window !== top;
} catch (e) {
  inFrame = true;
}

if (!inFrame && !navigator.userAgent.includes("Firefox")) {
  const password = btoa(prompt("Skriv in lösenordet:"));

  if (password === "RklOTiBGRU0gRkVM") {
    const newWindow = open("about:blank", "_blank");

    if (!newWindow || newWindow.closed) {
      alert("Pop-ups är blockerade.\n\nPop-ups behövs för att gömma denna sida från webbläsarens sökhistorik.\n\nUppe till höger borde det finnas en knapp eller notifikation eller något där du kan acceptera pop-ups för denna sida. Acceptera pop-ups, och gå sedan in på denna sida igen.\n\nOm det inte heller funkar, prata med människan du fick denna sida av, så löser vi problemet.");
      location.replace("https://google.com");
    } else {
      const newDocument = newWindow.document;
      const newIframe = newDocument.createElement("iframe");
      const newLink = newDocument.createElement("link");

      newDocument.title = "Google Drive";
      newLink.rel = "icon";
      newLink.href = "https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png";
      newIframe.src = location.href;
      newIframe.style.position = "fixed";
      newIframe.style.top = "0";
      newIframe.style.bottom = "0";
      newIframe.style.left = "0";
      newIframe.style.right = "0";
      newIframe.style.border = "none";
      newIframe.style.outline = "none";
      newIframe.style.width = "100%";
      newIframe.style.height = "100%";

      newDocument.head.appendChild(newLink);
      newDocument.body.appendChild(newIframe);
      location.replace("https://google.com");
    }
  } else {
    alert("Försök igen.");
    location.replace("https://google.com");
  }
}
