# Gift card

A static page has a gift card in which allows user to customize title and other contents.

## How to use

The page uses request parameters to customize title, message, soundclound, etc.

A simple template on url pattern as bellow:

```
https://lthoang.github.io/gift-card/?ot=<outside title>&it=<inside title>&m=<message>
```

Params list:

* `ot` (outside-title): title at the gift card's outside page
* `it` (inside-title): title at the gift card's inside page
* `m` (message): message content of the gift card's
* `os` (outside subtitle): sub-title of the gift cart's outside page
* `op` (outside-picture): encoded url of the picture outside the gift card
* `ip` (inside-picture): encoded url of the picture inside the gift card
* `sc` (sound-cloud): encoded source path of embed sound cloud iframe.
* `sch` (sound-cloud-hidden): the sound cloud component will be hidden if set this parameter to `true`

## Demo

* [Happy birthday (default)](https://lthoang.github.io/gift-card/index.html?it=Let%27s%20party&m=Let’s%20light%20the%20candles%20and%20celebrate%20this%20special%20day%20of%20your%20life.\nHappy%20birthday.)

* [Custom sound cloud](https://lthoang.github.io/gift-card/index.html?sc=https%3A%2F%2Fw.soundcloud.com%2Fplayer%2F%3Furl%3Dhttps%253A%2F%2Fapi.soundcloud.com%2Ftracks%2F142142050%26amp%3Bauto_play%3Dtrue%26amp%3Bvisual%3Dtrue)