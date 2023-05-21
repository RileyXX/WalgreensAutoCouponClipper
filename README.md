# WalgreensAutoCouponClipper

This script allows you to automatically clip coupons on Walgreens.com.

## How to Use:

1. Copy the JavaScript code below or create a new .txt file on your computer and save the following JavaScript code:
```javascript
fetch("https://raw.githubusercontent.com/RileyXX/WalgreensAutoCouponClipper/main/WalgreensAutoCouponClipper.js")
  .then((e=>e.text()))
  .then((e=>{let t=document.createElement("script");t.innerHTML=e,document.body.appendChild(t)}))
  .catch((e=>console.error(e)));
```
_You can download the code as a text file for later use by right-clicking [this link](https://raw.githubusercontent.com/RileyXX/WalgreensAutoCouponClipper/main/WalgreensAutoCouponClipper.txt), selecting "Save Link As," and saving the file. <br>Source code can be found [here](https://github.com/RileyXX/WalgreensAutoCouponClipper/blob/main/WalgreensAutoCouponClipper.js)._

2. Login to Walgreens.com and navigate to the [coupons page](https://www.walgreens.com/offers/offers.jsp/).
3. In your browser, press F12 or right-click and select "Inspect Element."
4. Click the console tab in the popup window.
5. Paste the JavaScript code in the box at the bottom and press Enter.

   *Note: These instructions are for the Chrome browser. The hotkeys might vary depending on your browser/operating system.*

## Notes/Limitations:
- Sending too many requests at once can result in your IP being temporarily banned from accessing the Walgreens website. Try not to paste the code twice or run it too many times within a short time frame. It is recommended to use a VPN, but it's not necessary. If your IP gets banned, simply click the shield button in the navigation bar of your browser and delete all the cookies for Walgreens.com. Then change your VPN server or wait (the duration of the ban can vary, ranging from a few minutes to 24 hours).
- Walgreens.com allows clipping up to 200 coupons.

## Demo:
![Demo](https://github.com/RileyXX/WalgreensAutoCouponClipper/raw/main/demo.gif)

## This Tool Was Also Posted On:
- [Reddit](https://www.reddit.com/r/meijer/comments/108iftd/auto_clip_all_coupons_script_for_meijercom_with/)

## Sponsorships, Donations, and Custom Projects:
If you find my scripts helpful, you can become a [sponsor](https://github.com/sponsors/RileyXX) and support my projects! If you need help with a project, open an issue, and I'll do my best to assist you. For other inquiries and custom projects, you can contact me on [Twitter](https://twitter.com/RileyxBell).

#### More Donation Options:
- Cashapp: `$rileyxx`
- Venmo: `@rileyxx`
- Bitcoin: `bc1qrjevwqv49z8y77len3azqfghxrjmrjvhy5zqau`
- Amazon Wishlist: [Link ↗](https://www.amazon.com/hz/wishlist/ls/WURF5NWZ843U)
