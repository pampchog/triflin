var apps = [
  {
    "id": "discord",
    "title": "Discord",
    "url": "https://discord.com/app",
    'image': 'https://play-lh.googleusercontent.com/UGQ-meFpqc8Nvbn6DqPJs7dG-aNsEHMts5We2O2aOtxPhdC5ymfI1kmYyxGgA_EVEIg'
  },
  {
    "id": "geforce",
    "title": "GeForce NOW",
    "url": "https://play.geforcenow.com",
    'image': 'https://play-lh.googleusercontent.com/vobh63LuLl3B59tlHTCrSdpWzH0b_IfOsOtpVFaLK-hNQnJiWntiUgQpnhlKeIeYXBM'
  },
  {
    "id": "tiktok",
    "title": "TikTok",
    "url": "https://tiktok.com",
    'image': 'https://sf-tb-sg.ibytedtos.com/obj/eden-sg/uhtyvueh7nulogpoguhm/tiktok-icon2.png'
  },
  {
    "id": "reddit",
    "title": "Reddit",
    "url": "https://reddit.com",
    'image': 'https://www.redditinc.com/assets/images/site/reddit-logo.png'
  },
  {
    "id": "youtube",
    "title": "YouTube",
    "url": "https://youtube.com",
    'image': 'https://yt3.googleusercontent.com/584JjRp5QMuKbyduM_2k5RlXFqHJtQ0qLIPZpwbUjMJmgzZngHcam5JMuZQxyzGMV5ljwJRl0Q=s900-c-k-c0x00ffffff-no-rj'
  },
  {
    'id': 'spotify',
    'title': 'Spotify',
    'url': 'https://open.spotify.com/browse',
    'image': 'https://www.scdn.co/i/_global/twitter_card-default.jpg'
  },
  {
    'id': 'chess',
    'title': 'Chess.com',
    'url': 'https://chess.com',
    'image': 'https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/SamCopeland/phpmeXx6V.png'
  },
  {
    'id': 'soundcloud',
    'title': 'Soundcloud',
    'url': 'https://soundcloud.com',
    'image': 'https://is1-ssl.mzstatic.com/image/pf/us/r30/Purple5/v4/04/a6/33/04a63383-5e25-4e58-121a-22238e95eb19/mzl.iomqdvtn.png'
  },
  {
    'id': 'netflix',
    'title': 'Netflix',
    'url': 'https://netflix.com',
    'image': 'https://play-lh.googleusercontent.com/TBRwjS_qfJCSj1m7zZB93FnpJM5fSpMA_wUlFDLxWAb45T9RmwBvQd5cWR5viJJOhkI'
  },
  {
    'id': 'viaplay',
    'title': 'Viaplay',
    'url': 'https://viaplay.se',
    'image': 'https://www.elgiganten.se/image/dv_web_D180001002794375/SSVIAPLAY12/viaplay-film-serier-i-12-manader.jpg'
  },
  {
    'id': 'hbo',
    'title': 'HBO Max',
    'url': 'https://hbomax.com',
    'image': 'https://hbomax-images.warnermediacdn.com/2020-05/square%20social%20logo%20400%20x%20400_0.png'
  },
  {
    'id': 'disney',
    'title': 'Disney+',
    'url': 'https://disneyplus.com',
    'image': 'https://s3-symbol-logo.tradingview.com/walt-disney--600.png'
  },
  {
    'id': 'twitch',
    'title': 'Twitch',
    'url': 'https://twitch.com',
    'image': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAulBMVEWRRv8AAAD///+WSP83G2FmMbT39PxKQ1Z7O9mEfJCKQ/OppLLo6Oj8/PyTk5MsLCwxMTFyN8l1cH9SUlJubm7q6O4zGVp3OdJFIXrx7vVAH3HNytKORPkcDTFNJYeAPuFrM7xlMbGoqKhKSkpDQ0NjY2MlJSW0tLR9fX0dFycAABERASABABkJAB1HIn4YDCcmHTMtJDgwKDs8HWs+N0csFU/RztYoE0ciEDx+eYfe2+MVDR4fDzcXCyrcY09wAAADC0lEQVR4nO3da1PTQBSA4WgQFEWMkGqlWFGLeEEUvCP//29ZoIUm2TSdZM+ezfF9vybd4ZmTmc5ktkuSEBERERERERERERERERERERERERERERERaZVKpo27LD0YrIk1GGvzpsB7dyS7r+2TBuoLpYHqwvSVMFBbKA9UFgYA6gpDAFWFQYCawjBARWGaFf+Sjbvr/tp6oC8sA6dCn+kLK0BrwirQmNABtCV0AU0JnUBLwvSZC2hIWAO0I6wDmhHWAq0I64FGhEuANoTLgDaE4yVAE8L0wLxw6YvD/1r4+s3OdW8flS9NZld2Jlt9Fj6+uakiPJxf2bYq3J5feYIQIUKECBEiRIgQIUKECBEiRIgQIUKECBH2W3jzVv+w18J3k93rJhXh0ezK7lGvhS1CiBAhQoQIG8vfGxfmH27XNSnMPy6sa1GYf1pc16BweFJY154wPy4s+znkj7mDCEsTDAoMIsyLwOdhf44fQDhUBQYQDr8UlnwR+kAFcWEJGHqC8sLhV90Jigu1H1Fx4fppYbmz8D5hYekRPVM5tUVSGMMERYXr3yKYoKQwjgkKCksTXNMCNghPH7raK2v2HDfFAmx12M7TMrDxE4pAH8IVgJqHe3UXNgMHij4PwhWAusezdRXGPsHOwmbgd2VgR2H8E+wo7MEEuwl7Aewi/NF448+RNi/pIlwBqI27qrWwJxNsL2wG/tKmzWop7M0E2wpXmGAswFbC3396BGwl3DhvuuNvPECZ42ZjAooI92MCSgjjAgoI9ze1TcW8Cy/imqB/YWwT9C48iQ7oWXgRH9Cv8DxCoFfhcYxAn8IoJ9h0mpkBYJKMNusb1Z3u/dLxqdi+B1fKfTDtFBjFv1HxkltoCOgWht1aKJxLaGmCTmH4jWmiVYWmHtHEITQ2warQHLAstAcsCTX2TkqXWQcWhFo772TLjE9wUai6rUmwzPYjmtwKNXfeyZbZfkSTudDuBGdC/W1NgmXGJ3gljGFbk2CZ7Ud0WhbLphixxr18CUpERERERERERERERERE0/4BIdJ2Nms3qFoAAAAASUVORK5CYII='
  },
  {
    'id': 'flixhq',
    'title': 'FlixHQ',
    'url': 'https://flixhq.to',
    'image': 'https://images.provenexpert.com/ee/5d/f6bf6e80a9c8a99e6d2b4b4f5348/flixhqto_full_1645264975.jpg'
  },
  {
    'id': 'github',
    'title': 'Github',
    'url': 'https://github.com',
    'image': 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
  },
  {
    'id': 'chatgpt',
    'title': 'ChatGPT',
    'url': 'https://chat.openai.com',
    'image': 'https://thelasttrombone.files.wordpress.com/2022/12/chatgpt_logo.jpg'
  },
  {
    'id': 'instagram',
    'title': 'Instagram',
    'url': 'https://instagram.com',
    'image': 'https://play-lh.googleusercontent.com/VRMWkE5p3CkWhJs6nv-9ZsLAs1QOg5ob1_3qg-rckwYW7yp1fMrYZqnEFpk0IoVP4LM=w240-h480-rw'
  }
]
