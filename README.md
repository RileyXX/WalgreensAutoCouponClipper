# WalgreensAutoCouponClipper
This script will auto clip coupons on Walgreens.com

## How to use:

1. Copy the javascript code below OR create a new .txt file on your computer and save the following javascript code
2. Login to walgreens.com and navigate to the [coupons page](https://www.walgreens.com/offers/offers.jsp/)
3. In browser, press F12 OR right click>inspect element
4. Click the console tab in the popup window
5. Paste the javascript code in the box at the bottom and press enter
#### Note: These are Chrome browser instructions. Hotkeys might vary depending on your browser/operating system.

## Javascript code (up to 200 coupons):
    fetch("https://raw.githubusercontent.com/RileyXX/WalgreensAutoCouponClipper/main/WalgreensAutoCouponClipper.js").then((e=>e.text())).then((e=>{let t=document.createElement("script");t.innerHTML=e,document.body.appendChild(t)})).catch((e=>console.error(e)));
To download this as a text file for later use right click [this link](https://raw.githubusercontent.com/RileyXX/WalgreensAutoCouponClipper/main/WalgreensAutoCouponClipper.txt) > save link as > save. Or open link and ctrl+s to download. Alternatively, you can copy the code and go to [step 2](https://github.com/RileyXX/WalgreensAutoCouponClipper/blob/main/README.md#how-to-use) of the "How to use" section.

## Notes/Limitations:

* Sending too many requests at once can get your IP temporarily banned from accessing the walgreens website. Try not to paste the code twice or run it too many times during a small time frame. Recommended to use a VPN but not necessary. If your IP gets banned simply click the little shield button in the navigation bar of your browser and delete all the cookies for walgreens.com. Then change VPN server or wait (not sure how long but could be anywhere from a couple minutes to 24hours)
* Walgreens.com only let's you clip up to 200 coupons.


## Demo:
![Demo](https://github.com/RileyXX/WalgreensAutoCouponClipper/raw/main/demo.gif)

## This tool was also posted on:
* [Reddit](https://www.reddit.com/r/meijer/comments/108iftd/auto_clip_all_coupons_script_for_meijercom_with/)

## Donations, Sponsorships and Custom Projects:
Like my scripts? Consider donating! Become a sponsor and support my projects! See below for other donation options. Need help with a project? Open an issue and I will try my best to help! For other inquiries and custom projects contact me on [Twitter](https://twitter.com/RileyxBell).

#### More donation options:
- Cashapp: `$rileyxx`
- Venmo: `@rileyxx`
- Bitcoin: `bc1qrjevwqv49z8y77len3azqfghxrjmrjvhy5zqau`
- Amazon Wishlist: [Link ↗](https://www.amazon.com/hz/wishlist/ls/WURF5NWZ843U)


