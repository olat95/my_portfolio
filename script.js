const theme = localStorage.getItem('theme')
if (theme == null) {
  setTheme('orange')
} else {
  setTheme(theme)
}

const themeBoxes = document.getElementsByClassName('theme-box')

for (let i = 0; themeBoxes.length > i; i++) {
  themeBoxes[i].addEventListener('click', function () {
    let mode = this.dataset.mode
    console.log('box clicked: ', mode)
    setTheme(mode)
  })
}

function setTheme(mode) {
  if (mode === 'orange') {
    document.getElementById('theme-color').href = 'css/style.css'
  }

  if (mode === 'dark') {
    document.getElementById('theme-color').href = 'css/black.css'
  }

  if (mode === 'sky') {
    document.getElementById('theme-color').href = 'css/blue.css'
  }

  if (mode === 'light') {
    document.getElementById('theme-color').href = 'css/light.css'
  }

  localStorage.setItem('theme', mode)
}
