document.getElementById("aiForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  document.getElementById("result").innerText = "AI is replying...";

  const response = await fetch(
    "https://YOUR-BACKEND-URL.onrender.com/api/ai-reply",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        message: message.value
      })
    }
  );

  const data = await response.json();
  document.getElementById("result").innerText = data.reply;
});
