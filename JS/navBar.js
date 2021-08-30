window.onload = function () {
  var open_btn = document.getElementById('open-btn')
  var close_btn = document.getElementById('close-btn')
  var sideNav = document.getElementById('sideNav')

  open_btn.addEventListener('click', () => {
    sideNav.style.width = '50%'
  })

  close_btn.addEventListener('click', () => {
    sideNav.style.width = '0%'
  })
}
