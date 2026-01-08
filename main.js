const reveals = document.querySelectorAll(".reveal");
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("show");
    });
  },
  { threshold: 0.12 }
);

reveals.forEach((el) => io.observe(el));

const sendBtn = document.getElementById("sendBtn");
const toast = document.getElementById("toast");
if (sendBtn && toast) {
  sendBtn.addEventListener("click", () => {
    toast.classList.remove("opacity-0", "translate-y-1");
    toast.classList.add("opacity-100", "translate-y-0");
    setTimeout(() => {
      toast.classList.add("opacity-0", "translate-y-1");
      toast.classList.remove("opacity-100", "translate-y-0");
    }, 1200);
  });
}

const accButtons = document.querySelectorAll(".acc-btn");
accButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const id = btn.dataset.acc;
    const panel = document.getElementById(id);
    if (!panel) return;

    panel.classList.toggle("open");
  });
});