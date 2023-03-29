let inFrame;
try {
    inFrame = window !== top
} catch (e) {
    inFrame = !0
}
if (!inFrame && !navigator.userAgent.includes("Firefox")) {
    const e = open("about:blank", "_blank");
    if (!e || e.closed) alert("Du har popups blockerade! Popups behövs för att hindra denna webbsida från att synas i historiken.\n\nDet borde finnas en knapp eller notis uppe till höger. Tryck där, och tillåt sedan poups från vår sida. Försök sedan komma åt vår sida igen.\n\n Om problemet kvarstår, kontakta oss på vilken sociala medie som helst. "), location.replace("https://google.com");
    else {
        const t = e.document,
            o = t.createElement("iframe"),
            n = o.style,
            i = t.createElement("link");
        t.title = "Ny flik", i.rel = "icon", i.href = "https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png", o.src = location.href, n.position = "fixed", n.top = n.bottom = n.left = n.right = 0, n.border = n.outline = "none", n.width = n.height = "100%", t.body.appendChild(o), location.replace("https://google.com")
    }
}

function clockTime() {
    var e = new Date,
        t = e.getHours(),
        o = e.getMinutes(),
        n = e.getSeconds(),
        i = "AM";
    0 == t && (t = 12), t > 12 && (t -= 12, i = "PM");
    var r = (t = t < 10 ? "0" + t : t) + ":" + (o = o < 10 ? "0" + o : o) + ":" + (n = n < 10 ? "0" + n : n) + " " + i;
    document.getElementById("MyClock").innerText = r, document.getElementById("MyClock").textContent = r, setTimeout(clockTime, 1e3)
}
clockTime(), document.addEventListener("keypress", (function(e) {
    if ("Enter" === e.key) {
        const e = document.getElementById("exploit").value,
            t = window.open("about:blank", "_blank").document,
            o = t.createElement("iframe"),
            n = o.style,
            i = t.createElement("link");
        t.title = "Google Drive", o.src = e, n.position = "fixed", n.border = n.outline = "none", n.top = n.bottom = n.left = n.right = 0, n.width = n.height = "100%", i.rel = "icon", i.href = "https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png", t.body.appendChild(o)
    }
}));