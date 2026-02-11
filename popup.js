document.getElementById("markBtn").addEventListener("click", async () => {
  const rolls = document.getElementById("rollInput").value;

  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.tabs.sendMessage(tab.id, {
    action: "markAttendance",
    rollNumbers: rolls
  });
});
