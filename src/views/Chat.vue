<template>
  <div class="chat-page">
    <div class="container">
      <div class="row">
        <div class="text">
          <h1>دردشة مباشرة مع الدعم</h1>
        </div>
        <div class="chat d-flex justify-content-between flex-wrap">
          <div class="chat-container">
            <div class="chat-header text-end">
              <h3>الدعم المباشر</h3>
            </div>
            <div class="chat-messages">
              <div
                v-for="message in messages"
                :key="message.id"

                :class="['message', message.isSentByUser ? 'sent-message' : 'received-message']"
              >
                <p>{{ message.text }}</p>
                <span class="message-time">{{ formatTime(message.time) }}</span>
              </div>
            </div>
            <div class="chat-input">
              <!-- Message Input -->
              <input
                v-model="newMessage"
                @keyup.enter="sendMessage"
                placeholder="اكتب رسالتك..."
              />
              <!-- Emoji Button -->
              <button @click="addEmoji" class="icon-button">
                <i class="pi pi-face-smile"></i>
              </button>
              <!-- File Attachment Button -->
              <input
                type="file"
                ref="fileInput"
                style="display: none"
                @change="handleFileUpload"
              />
              <button @click="openFilePicker" class="icon-button">
                <i class="pi pi-file-arrow-up"></i>
              </button>
              <!-- Send Button -->
              <button @click="sendMessage" class="send-button">
                <i class="pi pi-send"></i>
              </button>
            </div>
          </div>
          <div class="chat-actions d-flex gap-2 align-self-end mb-3 flex-wrap">
            <button class="new-chat" @click="startNewChat">دردشة جديدة</button>
            <button class="end-chat" @click="endChat">إنهاء</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newMessage: "",
      messages: [], // Array to store messages
    };
  },
  methods: {
    sendMessage() {
      if (this.newMessage.trim() !== "") {
        const userMessage = {
          id: Date.now(),
          text: this.newMessage,
          time: new Date(),
          isSentByUser: true,
        };
        this.messages.push(userMessage);

        // Clear input
        this.newMessage = "";

        // Add fixed response after user message
        setTimeout(() => {
          const fixedResponse = {
            id: Date.now() + 1,
            text: "الدعم غير متاح حالياً",
            time: new Date(),
            isSentByUser: false,
          };
          this.messages.push(fixedResponse);
        }, 500); // Delay to simulate response time
      }
    },
    addEmoji() {
      // يمكنك تعديل هذا الجزء لفتح قائمة إيموجي أو إدخال رمز إيموجي افتراضي
      this.newMessage += "😊";
    },
    openFilePicker() {
      this.$refs.fileInput.click();
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const fileMessage = {
          id: Date.now(),
          text: `تم إرفاق ملف: ${file.name}`,
          time: new Date(),
          isSentByUser: true,
        };
        this.messages.push(fileMessage);
      }
    },
    formatTime(time) {
      return new Intl.DateTimeFormat("ar-EG", {
        hour: "2-digit",
        minute: "2-digit",
      }).format(time);
    },
    startNewChat() {
      this.messages = []; // Clear all messages
    },
    endChat() {
      this.messages = []; // Clear messages
      this.newMessage = ""; // Clear input field
      alert("تم إنهاء الدردشة");
    },
  },
};
</script>

<style scoped>
.chat-page {
  padding: 20px 0;
  direction: rtl;
  background-color: #f7f6f5;
}
.text h1 {
  color: var(--main-color);
  font-size: 20px;
  font-weight: bold;
}
.chat {
  background-color: #fff;
  border-radius: 12px;
  overflow: hidden;
    padding: 10px;

}
.chat-container {
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  width: 60%;
  max-height: 600px;
  display: flex;
  flex-direction: column;
}

.chat-header {
  background-color: #f5f5f5;
  padding: 10px;
  text-align: center;
  border-bottom: 1px solid #d9d9d9;
}
.chat-header h3 {
  font-size: 16px;
}

.chat-messages {
  flex-grow: 1;
  padding: 10px;
  overflow-y: auto;
}

.message {
  max-width: 70%;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 10px;
  position: relative;
  margin: 22px 0;
}

.message.sent {
  background-color: #c7e9f1;
  align-self: flex-end;
  text-align: right;
}
.sent-message {
  align-self: flex-end;
  background-color: #4cae4c;
  padding: 10px;
    color: #fff;

  border-radius: 10px 10px 0 10px;
  max-width: 80%;
}
.received-message {
  align-self: flex-start;
  background-color: #D80003;
  color: #fff;
  padding: 10px;
  border-radius: 10px 10px 10px 0;
  max-width: 80%;
  border: 1px solid #eee;
      margin-right: auto;
    text-align: justify;
}


.message-time {
  font-size: 0.75em;
  color: #888;
  position: absolute;
  bottom: -18px;
  right: 5px;
}

.chat-input {
  display: flex;
  padding: 10px;
  border-top: 1px solid #d9d9d9;
}

.chat-input input {
  flex-grow: 1;
  padding: 5px;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
}

.icon-button {
  background: none;
  border: none;
  font-size: 1.2em;
  color: #5cb85c;
  cursor: pointer;
  margin-right: 5px;
}

.icon-button:hover {
  color: #4cae4c;
}

.send-button {
  margin-left: 10px;
  padding: 5px 15px;
  background-color: #5cb85c;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.send-button:hover {
  background-color: #4cae4c;
}

.chat-actions .new-chat {
  background-color: #0aa84e;
  color: #fff;
  border: none;
  padding: 5px;
  width: 134px;
  height: 51px;
  border-radius: 5px;
  cursor: pointer;
}

.chat-actions .end-chat {
  background-color: #D80003;
  color: #fff;
  border: none;
  /* padding: 8px 12px; */
  border-radius: 5px;
  cursor: pointer;
  padding: 5px;
  width: 134px;
  height: 51px;
}
@media (max-width: 477px) {
  .chat-container {
    width: 100%;

    margin: 10px 0;
  }
}
@media (max-width: 799px) {
  .chat-container {
    width: 100%;

    margin: 10px 0;
  }
}
@media (max-width: 992px) {
  .chat-container {
    width: 100%;

    margin: 10px 0;
  }
}
</style>
