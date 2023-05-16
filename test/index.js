import $ from '../index.js'

$(() => {
  $('body').css({
    height: '100vh',
    width: '100vw',
    overflow: 'hidden',
    backgroundColor: 'black'
  })
  $('.mainTitle').css({
    color: 'white',
    fontFamily: 'monospace'
  })

  $('.btn').css({
    border: 'none',
    backgroundColor: 'green',
    borderRadius: '10px',
    padding: '10px',
    color: 'white',
    cursor: 'pointer'
  }).on({
    mouseover: () => $('.btn')
      .css({
        backgroundColor: 'white',
        color: 'green'

      }),
    mouseleave: () => $('.btn')
      .css({
        backgroundColor: 'green',
        color: 'white'
      })
  })
})
