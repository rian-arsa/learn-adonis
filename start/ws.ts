import app from '@adonisjs/core/services/app'
import Ws from '#services/ws'

app.ready(() => {
  Ws.boot()
  const io = Ws.io
  io?.on('connection', (socket) => {
    console.log(socket.id)
    // Menampilkan daftar koneksi aktif
    console.log('Daftar koneksi aktif:', io.sockets.sockets.keys())

    socket.emit('news', 'Coba serve')

    socket.on('my other event', (data) => {
      console.log('client: ', data)

      setTimeout(() => {
        socket.emit('news', 'Coba serve')
      }, 2000)
    })

    socket.on('disconnect', () => {
      console.log('Server User disconnected')
    })
  })
})
