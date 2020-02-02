import tpl from './scroll.html'
import './scroll.css'

function scroll() {
    
    return {
        name: 'scroll',
        tpl: tpl,
        testfn: (e) => {
            console.log(e)
        }
    }

}

export default scroll