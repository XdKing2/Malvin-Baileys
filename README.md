<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&height=220&color=0:ff6b6b,40:f06595,100:845ef7&text=MALVIN%20BAILEYS&fontAlignY=40&fontSize=44&fontColor=ffffff&desc=Ultimate%20WhatsApp%20Web%20API%20Experience&descAlignY=60&descSize=18" alt="Malvin Baileys Banner" />

[![npm version](https://badge.fury.io/js/malvin-baileys.svg)](https://badge.fury.io/js/malvin-baileys)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/node/v/malvin-baileys.svg)](https://nodejs.org/)
[![Downloads](https://img.shields.io/npm/dm/malvin-baileys.svg)](https://npmjs.com/package/malvin-baileys)
[![GitHub stars](https://img.shields.io/github/stars/XdKing2/malvin-baileys?color=gold)](https://github.com/XdKing2/malvin-baileys)

<img src="https://i.ibb.co/WpnxhhF/malvin-xd.jpg" width="280px" style="border-radius: 20px;">

</div>

---

## 🚀 WHY MALVIN-BAILEYS?

<div align="center">
  <table>
    <tr>
      <td align="center"><b>⚡ Lightning Fast</b><br/>Optimized WebSocket</td>
      <td align="center"><b>🛡️ Secure</b><br/>Custom Pairing Codes</td>
      <td align="center"><b>🧩 Feature-Rich</b><br/>Interactive Messages</td>
      <td align="center"><b>🔄 Active Dev</b><br/>Regular Updates</td>
    </tr>
    <tr>
      <td align="center"><b>🤖 AI Messages</b><br/>Smart Icon Branding</td>
      <td align="center"><b>📰 Newsletters</b><br/>Channel Management</td>
      <td align="center"><b>🎨 Modern UI</b><br/>Gradient Banners</td>
      <td align="center"><b>💪 Production Ready</b><br/>Stable & Reliable</td>
    </tr>
  </table>
</div>

> [!NOTE]
> The original Baileys repository was initially removed and subsequently maintained by [WhiskeySockets](https://github.com/WhiskeySockets). This enhanced version includes numerous improvements and powerful features for production WhatsApp bots.

---

## 📦 INSTALLATION

### Option 1: NPM (Recommended)
```bash
npm install malvin-baileys
```

### Option 2: Yarn
```bash
yarn add malvin-baileys
```

### Option 3: Package.json Alias
```json
{
  "dependencies": {
    "@whiskeysockets/baileys": "npm:malvin-baileys"
  }
}
```

### Option 4: GitHub Direct
```json
{
  "dependencies": {
    "@whiskeysockets/baileys": "github:XdKing2/malvin-baileys"
  }
}
```

---

## 🔌 IMPORT METHODS

```javascript
// ESM
import makeWASocket from 'malvin-baileys'

// CommonJS
const { default: makeWASocket } = require('malvin-baileys')

// TypeScript
import makeWASocket, { DisconnectReason, useMultiFileAuthState } from 'malvin-baileys'
```

---

## 📖 QUICK START

```javascript
import makeWASocket, { DisconnectReason, useMultiFileAuthState } from 'malvin-baileys'

const startSock = async () => {
  const { state, saveCreds } = await useMultiFileAuthState('auth_info')
  
  const sock = makeWASocket({
    auth: state,
    browser: ['Malvin Baileys', 'Chrome', '1.0.0'],
    printQRInTerminal: true,
    syncFullHistory: false
  })

  sock.ev.on('creds.update', saveCreds)

  sock.ev.on('connection.update', (update) => {
    const { connection, lastDisconnect } = update
    if (connection === 'close') {
      const shouldReconnect = lastDisconnect?.error?.output?.statusCode !== DisconnectReason.loggedOut
      console.log('Connection closed, reconnecting:', shouldReconnect)
      if (shouldReconnect) startSock()
    } else if (connection === 'open') {
      console.log('✅ Connected to WhatsApp')
    }
  })

  return sock
}

const sock = await startSock()
```

---

## 🔐 CUSTOM PAIRING CODE

> [!TIP]
> Custom pairing codes enhance security and provide a personalized experience. The code must be exactly **8 characters** (letters/numbers).

```javascript
const phoneNumber = "263XXXXXXX"
const customCode = "MRMALVIN" // Must be 8 characters
const code = await sock.requestPairingCode(phoneNumber, customCode)
console.log(`📱 Pairing code: ${code?.match(/.{1,4}/g)?.join('-') || code}`)
```

**Example Output:** `MRMA-LVIN` or `ABCD-1234`

---

## 📊 FEATURE MATRIX

| Feature | Status | Description |
|---------|--------|-------------|
| 🔐 Custom Pairing | ✅ | Default "MRMALVIN" or custom 8-digit codes |
| 🤖 AI Message Icon | ✅ | Brand your bot messages with AI icon |
| 📰 Newsletter Support | ✅ | Full channel management & messaging |
| 🎛️ Interactive Buttons | ✅ | Quick replies, CTAs, copy codes |
| 🖼️ Album Messages | ✅ | Group multiple media in carousel |
| 📱 Event Messages | ✅ | Virtual event invites with RSVP |
| 🗳️ Poll Results | ✅ | Share poll outcomes with vote counts |
| 💳 Payment Requests | ✅ | Request payments with custom UI |
| 🛍️ Product Catalog | ✅ | E-commerce ready product messages |
| 🎨 Gradient Banners | ✅ | Beautiful console & message output |
| 🔄 Auto-Reconnect | ✅ | Stable connection handling |
| 📱 Multi-Device | ✅ | Latest WhatsApp MD support |

---

## ✨ FEATURE SHOWCASE

### 📰 Newsletter Management

<details>
<summary><b>Expand Newsletter Features</b></summary>

#### Get Newsletter Info
```javascript
// By invite code
const metadata = await sock.newsletterMetadata("invite", "xxxxx")

// By JID
const metadata = await sock.newsletterMetadata("jid", "abcd@newsletter")
console.log(metadata)
```

#### Create & Manage Newsletter
```javascript
// Create new newsletter
const metadata = await sock.newsletterCreate("Newsletter Name", "Description")

// Update description
await sock.newsletterUpdateDescription("abcd@newsletter", "New Description")

// Update name
await sock.newsletterUpdateName("abcd@newsletter", "New Name")

// Update/Remove picture
await sock.newsletterUpdatePicture("abcd@newsletter", buffer)
await sock.newsletterRemovePicture("abcd@newsletter")

// Delete newsletter
await sock.newsletterDelete("abcd@newsletter")
```

#### Follow & Notifications
```javascript
// Follow/Unfollow
await sock.newsletterFollow("abcd@newsletter")
await sock.newsletterUnfollow("abcd@newsletter")

// Mute/Unmute
await sock.newsletterMute("abcd@newsletter")
await sock.newsletterUnmute("abcd@newsletter")
```

#### React to Posts
```javascript
// Get message ID from URL: https://whatsapp.com/channel/xxxxx/175
const messageId = "175"
await sock.newsletterReactMessage("abcd@newsletter", messageId, "🥳")
```

</details>

---

### 🎛️ Interactive Buttons

<details>
<summary><b>Expand Button & Interactive Features</b></summary>

#### Text Buttons
```javascript
const buttons = [
  { buttonId: 'btn1', buttonText: { displayText: 'Option 1' }, type: 1 },
  { buttonId: 'btn2', buttonText: { displayText: 'Option 2' }, type: 1 }
]

await sock.sendMessage(jid, {
  text: "Choose an option:",
  footer: "Malvin Baileys",
  buttons,
  headerType: 1
})
```

#### Image Buttons
```javascript
const buttons = [
  { buttonId: 'btn1', buttonText: { displayText: 'View Details' }, type: 1 },
  { buttonId: 'btn2', buttonText: { displayText: 'Learn More' }, type: 1 }
]

await sock.sendMessage(jid, {
  image: { url: "https://example.com/image.jpg" },
  caption: "Check out our new product!",
  footer: "Malvin Baileys",
  buttons,
  headerType: 1
})
```

#### Advanced Interactive Buttons
```javascript
const interactiveButtons = [
  {
    name: "quick_reply",
    buttonParamsJson: JSON.stringify({
      display_text: "Quick Reply",
      id: "reply_1"
    })
  },
  {
    name: "cta_url",
    buttonParamsJson: JSON.stringify({
      display_text: "Visit Website",
      url: "https://example.com"
    })
  },
  {
    name: "cta_copy",
    buttonParamsJson: JSON.stringify({
      display_text: "Copy Code",
      id: "code_123",
      copy_code: "PROMO2026"
    })
  }
]

await sock.sendMessage(jid, {
  text: "Special Offer!",
  title: "Limited Time Deal",
  footer: "Malvin Baileys",
  interactiveButtons
})
```

#### Interactive with Media
```javascript
const interactiveButtons = [
  {
    name: "quick_reply",
    buttonParamsJson: JSON.stringify({
      display_text: "Yes, I'm Interested",
      id: "interested"
    })
  },
  {
    name: "cta_url",
    buttonParamsJson: JSON.stringify({
      display_text: "Learn More",
      url: "https://example.com/product"
    })
  }
]

// With Image
await sock.sendMessage(jid, {
  image: { url: "https://example.com/product.jpg" },
  caption: "New Arrival!",
  title: "Premium Collection",
  footer: "Malvin Baileys",
  interactiveButtons
})

// With Video
await sock.sendMessage(jid, {
  video: { url: "https://example.com/demo.mp4" },
  caption: "Watch our demo",
  title: "Product Demo",
  footer: "Malvin Baileys",
  interactiveButtons
})
```

</details>

---

### 🤖 AI Message Icon

```javascript
// Simply add "ai: true" to display AI icon
await sock.sendMessage(jid, { 
  text: "Hello! I'm your AI assistant.", 
  ai: true 
})
```

> [!TIP]
> AI icons make your bot messages stand out and clearly indicate automated responses to users.

---

### 🖼️ Album Messages

```javascript
await sock.sendMessage(jid, { 
  albumMessage: [
    { image: { url: "https://example.com/pic1.jpg" }, caption: "Summer 2026" },
    { image: { url: "https://example.com/pic2.jpg" }, caption: "Memories" },
    { video: { url: "https://example.com/video.mp4" }, caption: "Highlights" }
  ] 
})
```

---

### 📱 Event Messages

```javascript
await sock.sendMessage(jid, { 
  eventMessage: { 
    isCanceled: false, 
    name: "Tech Summit 2026", 
    description: "Join us for AI innovations and networking!", 
    location: { 
      degreesLatitude: 6.9271,
      degreesLongitude: 79.8612,
      name: "Colombo Convention Center" 
    }, 
    joinLink: "https://call.whatsapp.com/video/event123", 
    startTime: "1763019000",
    endTime: "1763026200"
  } 
})
```

---

### 🗳️ Poll Result Messages

```javascript
await sock.sendMessage(jid, { 
  pollResultMessage: { 
    name: "Favorite Feature?", 
    pollVotes: [
      {
        optionName: "AI Messages",
        optionVoteCount: "152"
      },
      {
        optionName: "Newsletters",
        optionVoteCount: "98"
      },
      {
        optionName: "Interactive Buttons",
        optionVoteCount: "234"
      }
    ] 
  } 
})
```

---

### 💳 Payment Request Messages

```javascript
await sock.sendMessage(jid, {
  requestPaymentMessage: {
    currency: "USD",
    amount: 50000,
    from: sender,
    background: {
      id: "100",
      fileLength: "0",
      width: 1000,
      height: 1000,
      mimetype: "image/webp"
    }
  }
})
```

---

### 🛍️ Product Messages

```javascript
await sock.sendMessage(jid, {
  productMessage: {
    title: "Premium Headphones",
    description: "Wireless noise-cancelling headphones",
    thumbnail: { url: "https://example.com/product.jpg" },
    productId: "PROD001",
    retailerId: "STORE001",
    url: "https://example.com/products/headphones",
    priceAmount1000: 299000,
    currencyCode: "USD",
    buttons: [
      {
        name: "cta_url",
        buttonParamsJson: JSON.stringify({
          display_text: "Buy Now",
          url: "https://example.com/checkout"
        })
      }
    ]
  }
})
```

---

## 🛠️ TROUBLESHOOTING

<details>
<summary><b>Common Issues & Solutions</b></summary>

**Pairing Code Not Working**

· Ensure code is exactly 8 characters (letters/numbers)
· Valid examples: "MRMALVIN", "ABCD1234", "TEST2026"
· Invalid examples: "ABC", "123", "TOOLONG99"

**Connection Drops**

· Auto-reconnect is built-in and handles most cases
· Check your internet stability
· Verify Node.js version is 18+

**QR Code Not Showing**

· Set `printQRInTerminal: true` in socket config
· Or listen to `connection.update` event for custom QR handling
· Use pairing code method as alternative

**Messages Not Sending**

· Verify the JID format: `number@s.whatsapp.net`
· Check if bot is connected: listen to `connection.open` event
· Ensure you have proper authentication state

</details>

---

## 📞 SUPPORT & COMMUNITY

<div align="center">

[![WhatsApp Channel](https://img.shields.io/badge/WhatsApp_Channel-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://whatsapp.com/channel/0029VbB3YxTDJ6H15SKoBv3S)
[![Telegram](https://img.shields.io/badge/Telegram-0088cc?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/malvintech)
[![GitHub Issues](https://img.shields.io/badge/GitHub_Issues-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/XdKing2/malvin-baileys/issues)
[![NPM Package](https://img.shields.io/badge/NPM_Package-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://npmjs.com/package/malvin-baileys)

</div>

---

## 📝 NOTES

> [!NOTE]
> This enhanced version includes improvements over the original repository. For base functionality and documentation, check out [WhiskeySockets/Baileys](https://github.com/WhiskeySockets/Baileys).

> [!IMPORTANT]
> Always use a dedicated WhatsApp number for bots. Never use your personal number to avoid potential bans.

---

## 👨‍💻 DEVELOPER

<div align="center">

**Created & Maintained by Malvin King**

[![GitHub](https://img.shields.io/badge/GitHub-XdKing2-181717?style=flat-square&logo=github)](https://github.com/XdKing2)
[![NPM](https://img.shields.io/badge/NPM-malvin--baileys-CB3837?style=flat-square&logo=npm)](https://npmjs.com/package/malvin-baileys)
[![YouTube](https://img.shields.io/badge/YouTube-MalvinTech-FF0000?style=flat-square&logo=youtube)](https://youtube.com/@malvintech2)

</div>

---

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=100&section=footer" width="100%">

### ⭐ Star this repository if you find it useful! ⭐

<p><i>Built with ❤️ for the WhatsApp developer community</i></p>

**© 2026 Malvin Baileys - MIT License**

</div>