const botToken = "7508184492:AAEAU1CJBfMjKbOQt9GjWDUkg2aYjyxmOLE"; 
const chatId = "417088457"; 

document.getElementById("contact-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  // Отримуємо дані з форми
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Формуємо повідомлення
  const text = `Новий запит з портфоліо:\n\n<b>Ім'я:</b> ${name}\n<b>Email:</b> ${email}\n<b>Повідомлення:</b>\n${message}`;

  // Надсилаємо повідомлення до Telegram
  try {
    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: "HTML",
      }),
    });

    if (response.ok) {
      alert("Повідомлення успішно надіслано!");
      document.getElementById("contact-form").reset();
    } else {
      alert("Помилка надсилання. Спробуйте ще раз.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Сталася помилка. Перевірте інтернет-з'єднання.");
  }
});
