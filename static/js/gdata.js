var games = [
  {
    'id': 'nowgg',
    'title': 'now.gg',
    'url': 'https://nowgg.me/',
    'image': 'https://uploads-ssl.webflow.com/60f008ba9757da0940af288e/6232d610e4172bed260d4cfd_9Dw5vXGi_400x400.jpeg'
  },
  {
    'id': 'y8',
    'title': 'Y8',
    'url': 'https://y8.com/',
    'image': 'https://play-lh.googleusercontent.com/rrFtf3hQpmMUmwHdcsvsV6vNpjMP9wsbvt6PpVg6sUleu0iJrlqVQizckc49dNkFQho'
  },
  {
    'id': 'spelase',
    'title': 'Spela.se',
    'url': 'https://spela.se',
    'image': 'https://files.cdn.spilcloud.com/drago/1614847196_drago-pointing.png'
  },
  {
    'id': 'a10',
    'title': 'A10',
    'url': 'https://a10.com/',
    'image': 'https://yt3.googleusercontent.com/ytc/AL5GRJW5900gC_FSuxy8wahaOF-hCTSSA-aBiT1uoKJHtQ=s900-c-k-c0x00ffffff-no-rj'
  },
  {
    'id': 'poki',
    'title': 'POKI Spel',
    'url': 'https://poki.se/',
    'image': 'https://a.poki.com/icons/fav-512.png'
  },
  {
    'id': '2player',
    'title': '2 Player Games',
    'url': 'https://www.twoplayergames.org/',
    'image': 'https://lh3.googleusercontent.com/WPMDHq8ehWqE4BNS6ORnlQ1J_uFwb7rOduNUykM7EpaTctYwnKq6YenvrpvY4iwKX-ZZ'
  },
  {
    'id': 'spelo',
    'title': 'Spelo.se',
    'url': 'https://www.spelo.se/',
    'image': 'https://tcf.admeen.org/category/1000/846/400x400/ambulance.jpg'
  },
  {
    'id': 'slither',
    'title': 'Slither.io',
    'url': 'https://www.slither.io/',
    'image': 'https://upload.wikimedia.org/wikipedia/en/5/50/Slither.png'
  },
  {
    'id': 'holeio',
    'title': 'Hole.io',
    'url': 'https://www.hole-io.com/',
    'image': 'https://play-lh.googleusercontent.com/YZcHF8esK3O-imazgjP62ZXTWeiW02HpndD4WchscpMIrCe-X8vtDb9o8ut3d7it2CM'
  },
  {
    'id': 'linerider',
    'title': 'Line rider',
    'url': 'https://www.linerider.com/',
    'image': 'https://tcf.admeen.org/category/500/211/400x400/line-rider.jpg'
  },
  {
    'id': 'odd games',
    'title': 'games.odd.gay',
    'url': 'https://games.odd.gay/',
    'image': 'https://games.odd.gay/icons/logo.png'
  },
  {
    'id': 'watchdocs',
    'title': 'Watch documentaries',
    'url': 'https://watchdocumentaries.com/',
    'image': 'https://i.pinimg.com/280x280_RS/22/79/cd/2279cd9e2d0809418586c9ecc6e5eb49.jpg'
  },
  {
    'id': '1v1lol',
    'title': '1v1.lol',
    'url': 'https://1v1.lol/',
    'image': 'data:image/jpeg;base64,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'
  },
  {
    'id': 'crazygames',
    'title': 'Crazy Games',
    'url': 'https://crazygames.com/',
    'image': 'data:image/png;base64,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'
  },
  {
    'id': 'mathplayground',
    'title': 'Math playground',
    'url': 'https://mathplayground.com/',
    'image': 'https://www.commonsense.org/sites/default/files/styles/ratio_1_1_large/public/png/2022-08/math-playground-logo.png?itok=lBg7KdFv'
  },
  {
    'id': 'coolmathgames',
    'title': 'Cool math games',
    'url': 'https://coolmathgames.com/',
    'image': 'https://ih1.redbubble.net/image.3625955387.7124/st,small,507x507-pad,600x600,f8f8f8.jpg'
  },
  {
    'id': 'krunker',
    'title': 'Krunker.io',
    'url': 'https://krunker.io/',
    'image': 'https://play-lh.googleusercontent.com/YiIdFPGRikQVMAcT8Bg5MiYRgi9YHwsFfP5RsfBcpwKqsl_y3AWqbJ8rhJ0TnLIsdg'
  },
  {
    'id': 'lordz',
    'title': 'Lordz.io',
    'url': 'https://lordz.io/',
    'image': 'https://lh3.googleusercontent.com/DxEu8dcJT30li3NR7dh5_KI4Rt2viUrWhoUEhqcz8iSvKXp7ipXdgGhYoDxAwct0zQ'
  }
]
