import { Server } from 'miragejs'

const productData = [
  {
    id: 1,
    name: 'Mocha',
    price: 3.5,
    imageUrl: 'https://images.unsplash.com/photo-1596078841242-12f73dc697c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80'
  },
  {
    id: 2,
    name: 'Latte',
    price: 3.5,
    imageUrl: 'https://images.unsplash.com/photo-1596078841242-12f73dc697c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80'
  },
  {
    id: 3,
    name: 'Vanilla Latte',
    price: 3.5,
    imageUrl: 'https://images.unsplash.com/photo-1596078841242-12f73dc697c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80'
  }
]

const server = new Server({
  routes() {
    this.namespace = '/api'
    this.get('/cart', () => ({ data: [productData[1]] }))
    this.get('/products', () => ({ data: productData }))
    this.get('/profile', () => ({
      name: 'Saige McDermott',
      memberSince: 'June 12th, 2018',
      recentOrders: [
        { orderId: 12, name: 'Latte' },
        { orderId: 27, name: 'Cafe Miel' }
      ]
    }))
    this.get('/users', () => [
      { id: '1', name: 'Luke' },
      { id: '2', name: 'Leia' },
      { id: '3', name: 'Anakin' }
    ])
  }
})

export default server
