import Scroll from './components/scroll'
const App = function () {
    var dom = document.getElementById('app')
    var scroll = new Scroll()
    dom.innerHTML = scroll.tpl
    document.write(scroll.name)
  }
  
new App()

