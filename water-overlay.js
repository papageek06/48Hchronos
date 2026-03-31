(() => {
  const DURATION_MS = 12 * 60_000;
  const STORAGE_KEY = "aquago.water.startAt.v2";
  const CANVAS_ID = "global-water-overlay";

  const init = () => {
    if (document.getElementById(CANVAS_ID)) return;

    const canvas = document.createElement("canvas");
    canvas.id = CANVAS_ID;
    canvas.setAttribute("aria-hidden", "true");

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const pageLayer = document.querySelector(".page");
    const pageContent = pageLayer?.querySelector(".content");

    if (pageLayer) {
      if (getComputedStyle(pageLayer).position === "static") {
        pageLayer.style.position = "relative";
      }
      canvas.style.position = "absolute";
      canvas.style.inset = "0";
      canvas.style.zIndex = "1";
      if (pageContent) {
        if (getComputedStyle(pageContent).position === "static") {
          pageContent.style.position = "relative";
        }
        pageContent.style.zIndex = "2";
      }
      pageLayer.prepend(canvas);
    } else {
      canvas.style.position = "fixed";
      canvas.style.inset = "0";
      canvas.style.zIndex = "1000";
      document.body.prepend(canvas);

      for (const child of document.body.children) {
        if (child === canvas || child.tagName === "SCRIPT" || child.tagName === "STYLE") continue;
        if (getComputedStyle(child).position === "static") {
          child.style.position = "relative";
        }
        if (!child.style.zIndex) {
          child.style.zIndex = "1001";
        }
      }
    }

    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.display = "block";
    canvas.style.pointerEvents = "none";

    const dprValue = () => Math.max(1, Math.min(2, window.devicePixelRatio || 1));

    let w = 0;
    let h = 0;
    let dpr = dprValue();

    const resize = () => {
      dpr = dprValue();
      w = Math.floor(window.innerWidth);
      h = Math.floor(window.innerHeight);
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });

    let startAt = Number(localStorage.getItem(STORAGE_KEY));
    if (!Number.isFinite(startAt) || startAt <= 0) {
      startAt = Date.now();
      localStorage.setItem(STORAGE_KEY, String(startAt));
    }

    let gameOverTriggered = false;

    const draw = (now) => {
      const elapsed = Math.max(0, Date.now() - startAt);
      const t = Math.min(1, elapsed / DURATION_MS);

      // Redirection game over quand le timer est écoulé
      if (t >= 1 && !gameOverTriggered) {
        gameOverTriggered = true;
        // Ne pas rediriger si on est déjà sur gameover.html
        if (!window.location.pathname.endsWith('gameover.html')) {
          window.location.href = 'gameover.html';
          return;
        }
      }

      ctx.clearRect(0, 0, w, h);

      const waterY = h * (1 - t);
      const time = now / 1000;
      const baseAmp = Math.max(6, Math.min(18, h * 0.02));
      const amp = baseAmp * (0.55 + 0.45 * (1 - Math.pow(1 - t, 2)));
      const speed = 0.9;
      const wl1 = Math.max(220, w * 0.35);
      const wl2 = Math.max(120, w * 0.18);

      const grad = ctx.createLinearGradient(0, waterY, 0, h);
      grad.addColorStop(0, "rgba(30, 144, 255, 0.22)");
      grad.addColorStop(1, "rgba(0, 90, 200, 0.28)");

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.moveTo(0, h);
      ctx.lineTo(0, waterY);

      const step = Math.max(6, Math.floor(w / 140));
      for (let x = 0; x <= w + step; x += step) {
        const y =
          waterY +
          Math.sin((x / wl1) * Math.PI * 2 + time * speed) * amp +
          Math.sin((x / wl2) * Math.PI * 2 - time * speed * 1.3) * (amp * 0.45) +
          Math.sin((x / (wl2 * 0.62)) * Math.PI * 2 + time * speed * 1.9) * (amp * 0.18);
        ctx.lineTo(x, y);
      }

      ctx.lineTo(w, h);
      ctx.closePath();
      ctx.fill();

      ctx.strokeStyle = "rgba(0, 120, 255, 0.18)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let x = 0; x <= w + step; x += step) {
        const y =
          waterY +
          Math.sin((x / wl1) * Math.PI * 2 + time * speed) * (amp * 0.8) +
          Math.sin((x / wl2) * Math.PI * 2 - time * speed * 1.3) * (amp * 0.25);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      requestAnimationFrame(draw);
    };

    requestAnimationFrame(draw);
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();

